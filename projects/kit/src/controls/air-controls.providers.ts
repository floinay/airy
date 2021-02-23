import {InjectionToken, Provider} from '@angular/core';

export const AIR_FILE_OPTIONS = new InjectionToken('Air controls file');

export const AIR_FILE_DEFAULT_PROVIDER: Provider = {
  provide: AIR_FILE_OPTIONS,
  useValue: {
    defaultPlaceholder: 'Attach file',
    defaultDescription: 'The file should be {{accept}}',
    defaultMultiplePlaceholder: 'Attach files',
    defaultMultipleDescription: 'The files should be {{accept}}'
  }
};

export const AIR_CONTROLS_DEFAULT_PROVIDERS: Provider[] = [
  AIR_FILE_DEFAULT_PROVIDER
];
