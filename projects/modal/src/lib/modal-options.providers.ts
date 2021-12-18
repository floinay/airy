import {InjectionToken} from '@angular/core';
import {OverlayConfig} from '@angular/cdk/overlay';

export const AIR_MODAL_DEFAULT_OPTIONS = new InjectionToken('Default Air Modal options')
export const DEFAULT_OPTIONS: Partial<OverlayConfig> = {
  hasBackdrop: true,
  panelClass: ['air-modal-panel'],
  backdropClass: ['air-modal-backdrop']
};

