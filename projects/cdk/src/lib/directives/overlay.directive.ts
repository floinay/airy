import {Directive, EventEmitter, Input, OnDestroy, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {Direction} from '@angular/cdk/bidi';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Subscription} from 'rxjs';
import {DirectionService} from '@airy-ui/direction';

@Directive({
  selector: '[airOverlay]',
  exportAs: 'overlay'
})
@UntilDestroy()
export class OverlayDirective implements OnDestroy {
  @Input() airOverlayHasBackdrop = true;
  @Input() airOverlayPanelClass: string[] = ['air-overlay-panel'];
  @Input() airOverlayBackdropClass: string[] = ['air-overlay-backdrop'];
  @Input() airOverlayWidth?: number | string;
  @Input() airOverlayHeight?: number | string;
  @Input() airOverlayMinWidth?: number | string;
  @Input() airOverlayMinHeight?: number | string;
  @Input() airOverlayMaxWidth?: number | string;
  @Input() airOverlayMaxHeight?: number | string;
  @Input() airOverlayDirection?: Direction = this.directionService.direction;
  @Input() airOverlayDisposeOnNavigation = false;
  private backdropSubscription?: Subscription;

  @Input() set airOverlayOpen(status: boolean) {
    status ? this.open() : this.detach();
  }

  @Output() readonly airOverlayKeydownEvents = new EventEmitter<KeyboardEvent>();
  @Output() readonly airOverlayOutsideClick = new EventEmitter<void>();
  @Output() readonly airOverlayBackdropClick = new EventEmitter<void>();
  @Output() readonly airOverlayOnClose = new EventEmitter<void>();

  private overlayRef?: OverlayRef;

  private get overlayConfig(): OverlayConfig {
    return {
      hasBackdrop: this.airOverlayHasBackdrop,
      panelClass: this.airOverlayPanelClass,
      backdropClass: this.airOverlayBackdropClass,
      width: this.airOverlayWidth,
      height: this.airOverlayHeight,
      minHeight: this.airOverlayMinHeight,
      minWidth: this.airOverlayMinWidth,
      maxWidth: this.airOverlayMaxWidth,
      maxHeight: this.airOverlayMaxHeight,
      direction: this.airOverlayDirection,
      disposeOnNavigation: this.airOverlayDisposeOnNavigation
    };
  }

  private templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);

  constructor(private overlay: Overlay,
              private templateRef: TemplateRef<any>,
              private directionService: DirectionService,
              private viewContainerRef: ViewContainerRef) {
  }

  open(): void {
    if (!this.overlayRef) {
      this.create();
    }

    if (!this.overlayRef?.hasAttached()) {
      this.overlayRef?.attach(this.templatePortal);
    }

    if (this.airOverlayHasBackdrop && this.overlayRef) {
      this.backdropSubscription = this.overlayRef.backdropClick().subscribe(() => this.airOverlayBackdropClick.emit());
    }
  }

  private create() {
    const overlayRef = this.overlayRef = this.overlay.create(this.overlayConfig);
    overlayRef.keydownEvents().pipe(untilDestroyed(this)).subscribe((e) => {
      if (e.code === 'Escape') {
        e.preventDefault();
        this.detach();
      }
      this.airOverlayKeydownEvents.emit(e);
    });
    overlayRef.outsidePointerEvents().pipe(untilDestroyed(this)).subscribe()
  }

  detach(): void {
    this.overlayRef?.detach();
    this.backdropSubscription?.unsubscribe();
    this.airOverlayOnClose.emit();
  }

  ngOnDestroy(): void {
    this.detach();
    this.overlayRef?.dispose();
  }

}
