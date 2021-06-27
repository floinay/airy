import {ComponentRef, Inject, Injectable} from '@angular/core';
import {Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {DOCUMENT} from '@angular/common';
import {ZoomImageComponent} from '@airy-ui/kit/zoom-image/component';

const OVERLAY_CONFIG = {
  hasBackdrop: true,
};

@Injectable({providedIn: 'root'})
@UntilDestroy()
export class ZoomImageService {
  private componentRef?: ComponentRef<ZoomImageComponent>;
  private overlayRef?: OverlayRef;

  constructor(@Inject(DOCUMENT) readonly document: Document,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private overlay: Overlay) {
  }

  open(src: string) {
    const overlayRef = this.overlayRef = this.overlay.create(OVERLAY_CONFIG);
    const portal = new ComponentPortal(ZoomImageComponent);

    this.componentRef = this.overlayRef.attach(portal);
    this.componentRef.instance.src = src;
    this.componentRef.instance.overlayRef = this.overlayRef;

    overlayRef.keydownEvents().pipe(untilDestroyed(this)).subscribe((e) => {
      if (e.code === 'Escape') {
        e.preventDefault();
        ZoomImageService.close(overlayRef);
      }
    });

    overlayRef.backdropClick().pipe(untilDestroyed(this)).subscribe((e) => {
      e.preventDefault();
      ZoomImageService.close(overlayRef);
    })

    overlayRef.outsidePointerEvents().pipe(untilDestroyed(this)).subscribe();
  }

  private static close(overlayRef: OverlayRef): void {
    overlayRef.detach();
  }
}
