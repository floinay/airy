import {ElementRef, EmbeddedViewRef, Inject, Injectable, NgZone, OnDestroy, ViewContainerRef} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {fromEvent, Observable, Subject} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {debounceTime, filter, takeUntil} from 'rxjs/operators';
import {TemplatePortal} from '@angular/cdk/portal';
import {PopoverComponentInterface} from '../../interfaces';
import {PopoverComponent} from '../../components';
import {DOCUMENT} from '@angular/common';
import {throwIf} from '../../../../../../cdk/src/lib';
import {isEqual} from 'lodash-es';
import {DirectionService} from '@airy-ui/kit';
import {OptimalPositionService} from '@airy-ui/cdk/services/optimal-position.service';

const START_POSITION_LTR: ConnectedPosition = {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom'
};

const START_POSITION_RTL: ConnectedPosition = {
  originX: 'end',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'bottom'
};


const OVER_POSITION: ConnectedPosition = {
  originX: 'center',
  originY: 'center',
  overlayX: 'center',
  overlayY: 'center',
  offsetY: 0,
};

export type PopoverShowEvent = 'click' | 'mouseenter';
export type PopoverHideEvent = 'click outside' | 'mouseout' | 'click';
export type PopoverPosition = 'start' | 'over';

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
      .withPositions([START_POSITION_LTR])
  });

  private position: PopoverPosition = 'start';

  private ignoreHide = false;

  private popover?: PopoverComponentInterface;

  private viewRef?: EmbeddedViewRef<PopoverComponent>;

  constructor(private elementRef: ElementRef,
              private directionService: DirectionService,
              private viewContainerRef: ViewContainerRef,
              private overlay: Overlay,
              private optimalPositionService: OptimalPositionService,
              @Inject(DOCUMENT) readonly document: Document,
              private zone: NgZone,
              private overlayPositionBuilder: OverlayPositionBuilder) {
    this.listenShowEvent();
    this.listenHideEvent();
  }

  setPopover(popover: PopoverComponentInterface): void {
    this.popover = popover;
  }

  setPosition(position: PopoverPosition): void {
    if (this.position === position) {
      return;
    }
    this.position = position;
    this.updateOverlayPosition(this.connectedPosition);
  }

  private updateOverlayPosition(position: ConnectedPosition): void {
    this.overlayRef.updatePositionStrategy(
      this.overlayPositionBuilder
        .flexibleConnectedTo(this.elementRef)
        .withPositions([position])
    );
  }

  private get connectedPosition(): ConnectedPosition {
    if (this.position === 'over') {
      return OVER_POSITION;
    }

    return this.directionService.isLtr() ? START_POSITION_LTR : START_POSITION_RTL;
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

    if (this.isOverPosition) {
      this.setOverlaySize();
    }


    this.ignoreHide = true;
    const portal = new TemplatePortal(this.popover.template, this.viewContainerRef);
    this.viewRef = this.overlayRef.attach(portal);
    setTimeout(() => this.setOptimalPositionAndAddClassesToPopoverContent(), 20);
    setTimeout(() => this.ignoreHide = false, 100);
  }

  private setOptimalPositionAndAddClassesToPopoverContent(): void {
    if (this.isStartPosition) {
      const optimalPosition = this.optimalPositionService.optimalPosition({
        connectedElement: this.overlayRef.overlayElement,
        connectedTo: this.elementRef.nativeElement,
        position: this.connectedPosition
      });

      if (!isEqual(this.connectedPosition, optimalPosition)) {
        this.updateOverlayPosition(optimalPosition);
      } else {
        this.updateOverlayPosition(this.connectedPosition);
      }
      this.setClassesToPopoverContent(optimalPosition);
    }
  }

  private setClassesToPopoverContent(position: ConnectedPosition): void {
    this.popoverContentElement?.classList.add('position-x-' + position.originX);
    this.popoverContentElement?.classList.add('position-y-' + position.originY);
  }

  private get isOverPosition(): boolean {
    return this.position === 'over';
  }

  private get isStartPosition(): boolean {
    return this.position === 'start';
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
              && !this.popoverContentElement?.contains(e.target as Node)
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
              && (!this.popoverContentElement?.contains(e.target as Node)
                && (!this.elementRef.nativeElement.contains(e.target)));
          }));
    }

    return undefined;
  }

  private get popoverContentElement(): HTMLElement | null {
    if (this.popover?.id) {
      return this.document.getElementById(this.popover.id);
    }

    return null;
  }

  hide(): void {
    const element = this.popoverContentElement;
    if (element) {
      element.classList.add('hide');
      setTimeout(() => {
        this.viewRef?.detach();
        this.overlayRef.detach();
        this.viewRef = undefined;
      }, 100);
    }

  }


  ngOnDestroy(): void {
    this.onShowEventChanged$.complete();
    this.onHideEventChanged$.complete();
    this.hide();
    this.overlayRef.dispose();
  }

  private setOverlaySize(): void {
    this.overlayRef.updateSize({
      width: this.elementRef.nativeElement.offsetWidth,
      height: this.elementRef.nativeElement.offsetHeight
    });
  }
}
