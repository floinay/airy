import {ElementRef, EmbeddedViewRef, Inject, Injectable, NgZone, OnDestroy, ViewContainerRef} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {fromEvent, Observable, Subject} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {debounceTime, filter, takeUntil} from 'rxjs/operators';
import {TemplatePortal} from '@angular/cdk/portal';
import {PopoverComponentInterface} from '../../interfaces';
import {PopoverComponent} from '../../components';
import {DOCUMENT} from '@angular/common';
import {throwIf} from '../../../cdk';

const DEFAULT_POSITION: ConnectedPosition = {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom'
};

export type PopoverShowEvent = 'click' | 'mouseenter';
export type PopoverHideEvent = 'click outside' | 'mouseout' | 'click';

@Injectable()
@UntilDestroy()
export class PopoverService implements OnDestroy {
  private hideDebounce = 50;

  private onShowEventChanged$ = new Subject<void>();
  private onHideEventChanged$ = new Subject<void>();

  private showEvent: PopoverShowEvent = 'click';

  private hideEvent: PopoverHideEvent = 'click';

  private overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([DEFAULT_POSITION])
  });

  private ignoreHide = false;

  private popover?: PopoverComponentInterface;

  private viewRef?: EmbeddedViewRef<PopoverComponent>;

  constructor(private elementRef: ElementRef,
              private viewContainerRef: ViewContainerRef,
              private overlay: Overlay,
              @Inject(DOCUMENT) readonly document: Document,
              private zone: NgZone,
              private overlayPositionBuilder: OverlayPositionBuilder) {
    this.listenShowEvent();
    this.listenHideEvent();
  }

  setPopover(popover: PopoverComponentInterface): void {
    this.popover = popover;
  }

  setHideDebounce(value: number): void {
    this.hideDebounce = value;
    this.onHideEventChanged$.next();
    this.onShowEventChanged$.next();
    this.listenHideEvent();
    this.listenShowEvent();
  }

  show(): void {
    if (this.viewRef || this.overlayRef.hasAttached()) {
      return;
    }
    if (!this.popover) {
      throw new Error('Please set popover component');
    }
    this.ignoreHide = true;
    const portal = new TemplatePortal(this.popover.template, this.viewContainerRef);
    this.viewRef = this.overlayRef.attach(portal);

    setTimeout(() => this.ignoreHide = false, 100);
  }

  setShowEvent(event: PopoverShowEvent): void {
    if (event === this.showEvent) {
      return;
    }
    this.onShowEventChanged$.next();
    this.showEvent = event;
    this.listenShowEvent();
  }

  setHideEvent(event: PopoverHideEvent): void {
    if (event === this.hideEvent) {
      return;
    }
    this.onHideEventChanged$.next();
    this.hideEvent = event;
    this.listenHideEvent();
  }

  private listenShowEvent(): void {
    fromEvent(this.elementRef.nativeElement, this.showEvent)
      .pipe(untilDestroyed(this), takeUntil(this.onShowEventChanged$))
      .subscribe(() => this.show());
  }

  private listenHideEvent(): void {
    const event = this.getHideEvent() as Observable<any>;
    throwIf(!event, 'Please set correct hide event');
    event.subscribe(() => this.hide());
  }


  private getHideEvent(): Observable<any> | undefined {
    if (this.hideEvent === 'mouseout') {
      return fromEvent(this.document, 'mousemove')
        .pipe(untilDestroyed(this),
          debounceTime(this.hideDebounce),
          takeUntil(this.onHideEventChanged$),
          filter(e => {
            return (!this.elementRef.nativeElement.contains(e.target)
              && !this.popoverContentHtmlElement?.contains(e.target as Node)
            );
          }));
    } else if (this.hideEvent === 'click') {
      return fromEvent(this.document.body, 'click')
        .pipe(
          untilDestroyed(this),
          debounceTime(this.hideDebounce),
          takeUntil(this.onHideEventChanged$),
          filter(() => !this.ignoreHide)
        );
    } else if (this.hideEvent === 'click outside') {
      return fromEvent(this.document.body, 'click')
        .pipe(
          untilDestroyed(this),
          debounceTime(this.hideDebounce),
          takeUntil(this.onHideEventChanged$),
          filter((e) => {
            return !this.ignoreHide
              && (!this.popoverContentHtmlElement?.contains(e.target as Node)
                && (!this.elementRef.nativeElement.contains(e.target)));
          }));
    }

    return undefined;
  }

  private get popoverContentHtmlElement(): HTMLElement | null {
    if (this.popover?.id) {
      return this.document.getElementById(this.popover.id);
    }

    return null;
  }

  hide(): void {
    this.viewRef?.detach();
    this.overlayRef.detach();
    this.viewRef = undefined;
  }


  ngOnDestroy(): void {
    this.onShowEventChanged$.complete();
    this.onHideEventChanged$.complete();
    this.hide();
    this.overlayRef.dispose();
  }
}
