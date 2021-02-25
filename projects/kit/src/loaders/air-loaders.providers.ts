import {InjectionToken, Provider} from '@angular/core';
import {LoaderOptions} from './interfaces/loader.options';

export const AIR_LOADER_OPTIONS = new InjectionToken<LoaderOptions>('Air loader options');

export const AIR_LOADER_OPTIONS_DEFAULT_PROVIDER: Provider = {
  provide: AIR_LOADER_OPTIONS,
  useValue: {
    defaultIcon: '',
    defaultMessage: ''
  }
};



