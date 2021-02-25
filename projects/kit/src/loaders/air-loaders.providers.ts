import {InjectionToken, Provider} from '@angular/core';
import {LoaderOptions} from './interfaces/loader.options';

export const AIR_LOADER_OPTIONS = new InjectionToken<LoaderOptions>('Air loader options');

export const AIR_LOADER_DEFAULT_OPTIONS: Provider = {
  provide: AIR_LOADER_OPTIONS,
  useValue: {
    defaultIcon: 'assets/icons/loader.gif',
    defaultMessage: '',
  }
};

export const AIR_LOADER_DEFAULT_PROVIDERS: Provider[] = [
  AIR_LOADER_DEFAULT_OPTIONS
];

