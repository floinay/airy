import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Inject,
  Input, OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {PopoverComponent} from '../../components';
import {fromEvent} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {DOCUMENT} from '@angular/common';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {debounceTime, filter} from 'rxjs/operators';
import ResizeObserver from 'resize-observer-polyfill';

type PopoverShowEvent = 'click' | 'mouseenter';
type PopoverHideEvent = 'click outside' | 'mouseout' | 'click';

const DEFAULT_POSITION: ConnectedPosition = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
  offsetY: -3,
};

@Directive({
  selector: '[airPopover]',
  exportAs: 'popover'
})
@UntilDestroy()
export class PopoverDirective implements OnInit, OnDestroy {
  private overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([DEFAULT_POSITION])
  });
  @Input() airPopover!: PopoverComponent;

  @Input() airPopoverShowEvent: PopoverShowEvent = 'click';

  @Input() airPopoverHideEvent: PopoverHideEvent = 'click';

  @Input() airPopoverDebounce = 50;

  private componentRef?: EmbeddedViewRef<PopoverComponent>;

  private ignoreHide = false;

  private resizeObserver?: ResizeObserver;

  constructor(private elementRef: ElementRef,
              private overlay: Overlay,
              private viewContainerRef: ViewContainerRef,
              private overlayPositionBuilder: OverlayPositionBuilder,
              @Inject(DOCUMENT) readonly document: Document) {
  }

  ngOnInit(): void {
    this.listenShowEvent();
    this.listenHideEvent();
  }

  show(): void {
    if (this.componentRef) {
      return;
    }
    this.ignoreHide = true;
    const portal = new TemplatePortal(this.airPopover.template, this.viewContainerRef);

    this.componentRef = this.overlayRef.attach(portal);

    setTimeout(() => this.ignoreHide = false, 100);
  }

  hide(): void {
    this.overlayRef.detach();
    this.componentRef = undefined;
    this.resizeObserver?.unobserve(this.overlayRef.overlayElement);
  }


  private listenShowEvent(): void {
    fromEvent(this.elementRef.nativeElement, this.airPopoverShowEvent)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.show());
  }

  private listenHideEvent(): void {
    if (this.airPopoverHideEvent === 'mouseout') {
      fromEvent(this.document, 'mousemove')
        .pipe(untilDestroyed(this), debounceTime(this.airPopoverDebounce), filter(e => {
          return (!this.elementRef.nativeElement.contains(e.target)
            && !this.document.getElementById('air-popover-content')?.contains(e.target as Node)
          );
        }))
        .subscribe(() => this.hide());
    } else if (this.airPopoverHideEvent === 'click') {
      fromEvent(this.document.body, 'click')
        .pipe(untilDestroyed(this), debounceTime(this.airPopoverDebounce), filter(() => !this.ignoreHide))
        .subscribe(() => this.hide());
    } else if (this.airPopoverHideEvent === 'click outside') {
      fromEvent(this.document.body, 'click')
        .pipe(untilDestroyed(this), debounceTime(this.airPopoverDebounce), filter((e) => {
          return !this.ignoreHide
            && (!document.getElementById('air-popover-content')?.contains(e.target as Node)
              && (!this.elementRef.nativeElement.contains(e.target)));
        }))
        .subscribe(() => this.hide());
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.unobserve(this.overlayRef.overlayElement);
    this.overlayRef.dispose();
  }

}
