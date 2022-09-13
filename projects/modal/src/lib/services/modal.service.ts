import { Inject, Injectable, Injector, Type } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { AIR_MODAL_DEFAULT_OPTIONS } from '../modal-options.providers';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ModalRef } from '../modal-ref';

interface OpenModalOptions {
  component: Type<any>;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  disposeOnNavigation?: boolean;
  closeOnBackdropClick?: boolean;
}

@Injectable({providedIn: 'root'})
export class ModalService {

  constructor(@Inject(AIR_MODAL_DEFAULT_OPTIONS) readonly options: Partial<OverlayConfig>,
              private injector: Injector,
              private overlay: Overlay) {
  }

  open<T>(options: OpenModalOptions, data?: T): ModalRef<T> {
    const overlayConfig = {...this.options, ...options};
    const overlay = this.overlay.create(overlayConfig);
    const ref = this.createModalRef<T>(overlay, data);
    const injector = this.createInjector(ref);
    const portal = new ComponentPortal(options.component, null, injector);
    overlay.attach(portal);
    return ref;
  }

  private createModalRef<T>(overlay: OverlayRef, data: any): ModalRef<T> {
    return new ModalRef(overlay, data);
  }

  private createInjector(ref: ModalRef): Injector {
    const tokens = new WeakMap([[ModalRef, ref]]);
    return new PortalInjector(this.injector, tokens);
  }
}
