import {ChangeDetectorRef, Directive, ElementRef, Input, OnDestroy, Renderer2} from '@angular/core';
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

  private load = false;

  @Input()
  set airLoad(value: boolean) {
    this.statusChange(value);
  }

  @Input() set airLoadWhen(key: string | Array<string>) {
    if (this.loadFromSubscription) {
      this.hide();
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
              private cdr: ChangeDetectorRef,
              private elementRef: ElementRef) {
  }

  statusChange(value: boolean): void {
    if (this.load === value) {
      return;
    }
    this.load = value;
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  show(): void {
    this.elementRef.nativeElement.classList.add('air-load');
    this.overlayRef.updateSize({
      width: this.elementRef.nativeElement.offsetWidth,
      height: this.elementRef.nativeElement.offsetHeight
    });
    const portal = new ComponentPortal(LoaderComponent);
    this.overlayRef.attach(portal);
  }

  hide(): void {
    this.load = false;
    this.overlayRef.detach();
    this.overlayRef.detachBackdrop();
    this.cdr.markForCheck();
    this.elementRef.nativeElement.classList.remove('air-load');
  }

  ngOnDestroy(): void {
    this.hide();
    this.overlayRef.dispose();
  }

}
