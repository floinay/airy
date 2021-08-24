import {AfterViewInit, Directive, DoCheck, ElementRef, HostListener, Inject, Input, NgZone} from '@angular/core';
import {fromEvent} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {WINDOW} from '@ng-web-apis/common';
import {auditTime, debounceTime, tap} from 'rxjs/operators';

@Directive({
  selector: 'textarea[airTextareaAutosize]'
})
@UntilDestroy()
export class TextareaAutosizeDirective implements AfterViewInit, DoCheck {
  @Input('airTextareaAutosizeMinRows') minRows = 1;
  @Input('airTextareaAutosizeMaxRows') maxRows?: number;
  private lineHeight = 0;

  get textarea(): HTMLTextAreaElement {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef<HTMLTextAreaElement>,
              private zone: NgZone,
              @Inject(WINDOW) readonly window: Window) {
  }

  @HostListener('input')
  _noopInputHandler() {
    // no-op handler that ensures we're running change detection on input events.
  }

  ngAfterViewInit(): void {
    this.initialStyles();
    this.cacheLineHeight();
    this.listenWindowResize();
    this.resize();
  }

  ngDoCheck(): void {
    this.resize();
  }

  private listenWindowResize(): void {
    this.zone.runOutsideAngular(() => {
      fromEvent(this.window, 'resize')
        .pipe(
          auditTime(17),
          tap(() => this.resize()),
          debounceTime(100),
          untilDestroyed(this)
        ).subscribe(() => {
        this.cacheLineHeight();
        this.resize();
      });
    });
  }

  private initialStyles(): void {
    this.textarea.style.overflowY = 'hidden';
  }

  private resize(): void {
    this.textarea.style.height = '0';
    this.textarea.style.height = `${this.textarea.scrollHeight}px`;
  }

  private setMaxHeight(): void {
    if (this.maxRows && this.lineHeight) {
      this.textarea.style.maxHeight = (this.maxRows * this.lineHeight) + 'px';
    }
  }

  private setMinHeight(): void {
    if (this.lineHeight) {
      this.textarea.style.minHeight = this.lineHeight + 'px';
    }
  }

  private cacheLineHeight(): void {
    let clonedArea = this.textarea.cloneNode(false) as HTMLTextAreaElement;
    clonedArea.rows = 1;
    clonedArea.style.position = 'absolute';
    clonedArea.style.visibility = 'hidden';
    clonedArea.style.border = 'none';
    clonedArea.style.padding = '0!important';
    clonedArea.style.width = 'auto';
    clonedArea.style.height = 'auto';
    clonedArea.style.minHeight = '';
    clonedArea.style.maxHeight = '';
    clonedArea.style.overflow = 'hidden';
    clonedArea.value = '';
    this.textarea.parentNode!.appendChild(clonedArea);
    this.lineHeight = clonedArea.clientHeight;
    this.textarea.parentNode!.removeChild(clonedArea);
    this.setMinHeight();
    this.setMaxHeight();
  }
}
