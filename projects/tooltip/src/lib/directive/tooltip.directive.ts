import {ComponentRef, Directive, ElementRef, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {TooltipComponent} from '../component';
import {Positions} from './tooltip.types';
import {mapPosition} from './positions.map';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {fromEvent} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {filter} from 'rxjs/operators';

type TooltipShowEvent = 'click' | 'mouseenter';
type TooltipHideEvent = 'click outside' | 'mouseout';

const DEFAULT_POSITION: ConnectedPosition = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
  offsetY: -3,
};

// @dynamic
@Directive({
  selector: '[airTooltip]',
  exportAs: 'tooltip'
})
@UntilDestroy()
export class TooltipDirective implements OnDestroy, OnInit {
  private overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([DEFAULT_POSITION])
  });

  @Input() set airToolTipPosition(value: Positions) {
    this.overlayRef.updatePositionStrategy(
      this.overlayPositionBuilder
        .flexibleConnectedTo(this.elementRef)
        .withPositions([mapPosition(value)])
    );
  }

  @Input() airTooltipShowEvent: TooltipShowEvent = 'mouseenter';

  @Input() airTooltipHideEvent: TooltipHideEvent = 'mouseout';

  @Input('airTooltip') text = '';

  private componentRef?: ComponentRef<TooltipComponent>;


  show(): void {
    if (this.componentRef) {
      return;
    }
    const portal = new ComponentPortal(TooltipComponent);
    this.componentRef = this.overlayRef.attach(portal);
    this.componentRef.instance.text = this.text;
  }

  hide(): void {
    this.overlayRef.detach();
    this.componentRef = undefined;
  }

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              @Inject(DOCUMENT) readonly document: Document,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.listenShowEvent();
    this.listenHideEvent();
  }

  ngOnDestroy(): void {
    this.overlayRef.dispose();
  }

  private listenShowEvent(): void {
    fromEvent(this.elementRef.nativeElement, this.airTooltipShowEvent)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.show());
  }

  private get tooltipContentElement(): Element | null {
    if (this.componentRef?.instance.id) {
      return this.document.getElementById(this.componentRef.instance.id);
    }

    return null;
  }

  private listenHideEvent(): void {
    if (this.airTooltipHideEvent === 'mouseout') {
      fromEvent(this.document, 'mousemove')
        .pipe(untilDestroyed(this),
          untilDestroyed(this),
          filter(e => {
            return (!this.elementRef.nativeElement.contains(e.target)
              && !this.tooltipContentElement?.contains(e.target as Node)
            );
          })).subscribe(() => this.hide());
    } else {
      fromEvent(this.document.body, 'click').pipe(untilDestroyed(this)).subscribe(e => {
        if (
          !this.componentRef?.instance.elementRef.nativeElement.contains(e.target)
          && (!this.elementRef.nativeElement.contains(e.target))
        ) {
          this.hide();
        }
      });
    }
  }
}
