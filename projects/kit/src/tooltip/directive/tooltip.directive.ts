import {ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {TooltipComponent} from '../component';
import {Positions} from './tooltip.types';
import {mapPosition} from './positions.map';

const DEFAULT_POSITION: ConnectedPosition = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
  offsetY: -3,
};

@Directive({
  selector: '[airTooltip]'
})
export class TooltipDirective implements OnDestroy {
  private overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([DEFAULT_POSITION])
  });

  @Input() set position(value: Positions) {
    this.overlayRef.updatePositionStrategy(
      this.overlayPositionBuilder
        .flexibleConnectedTo(this.elementRef)
        .withPositions([mapPosition(value)])
    );
  }

  @Input('airTooltip') text = '';

  @HostListener('mouseenter')
  show(): void {
    const portal = new ComponentPortal(TooltipComponent);
    const ref: ComponentRef<TooltipComponent> = this.overlayRef.attach(portal);
    ref.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide(): void {
    this.overlayRef.detach();
  }

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

  ngOnDestroy(): void {
    this.overlayRef.dispose();
  }
}
