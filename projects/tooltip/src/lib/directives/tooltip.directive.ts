import { ComponentRef, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from '../components/tooltip.component';
import { Positions } from './tooltip.types';
import { mapPosition } from './positions.map';


@Directive({
  selector: '[airTooltip]'
})
export class TooltipDirective {
  private defaultPosition: ConnectedPosition = {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
    offsetY: -3,
  };

  private overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([this.defaultPosition])
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
    const tooltipPortal = new ComponentPortal(TooltipComponent);
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide(): void {
    this.overlayRef.detach();
  }

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }
}
