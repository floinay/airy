import {Directive, ElementRef, HostBinding, Input, OnDestroy, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadWhenService} from './load-when.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {LoaderComponent} from '../../components';

const POSITION: ConnectedPosition = {
  originX: 'center',
  originY: 'center',
  overlayX: 'center',
  overlayY: 'center',
  offsetY: 0,
};

@Directive({
  selector: '[airLoad], [airLoadWhen]',
  exportAs: 'airLoad'
})
@UntilDestroy()
export class LoadDirective implements OnDestroy {
  private loadFromSubscription?: Subscription;
  private overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([POSITION])
  });

  @HostBinding('class.air-load')
  private load = false;

  @Input()
  set airLoad(value: boolean) {
    this.statusChange(value);
  }

  @Input() set airLoadWhen(key: string | Array<string>) {
    if (this.loadFromSubscription) {
      this.loadFromSubscription.unsubscribe();
    }

    this.loadFromSubscription = this.loadWhenService.watchLoad$(key)
      .pipe(untilDestroyed(this))
      .subscribe((status: boolean) => {
        this.statusChange(status);
      });
  }

  constructor(private loadWhenService: LoadWhenService,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private renderer: Renderer2,
              private overlay: Overlay,
              private elementRef: ElementRef) {
  }

  statusChange(value: boolean): void {
    this.load = value;
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  show(): void {
    this.overlayRef.updateSize({
      width: this.elementRef.nativeElement.offsetWidth,
      height: this.elementRef.nativeElement.offsetHeight
    });
    const portal = new ComponentPortal(LoaderComponent);
    this.overlayRef.attach(portal);
  }

  hide(): void {
    this.overlayRef.detach();
    this.overlayRef.detachBackdrop();
  }

  ngOnDestroy(): void {
    this.overlayRef.dispose();
  }

}
