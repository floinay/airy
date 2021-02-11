import {InjectionToken} from '@angular/core';

export type ChangesStateIgnoredKeys = Array<string | string[]>;

export const CHANGES_STATE_IGNORED_KEYS = new InjectionToken<string[]>('The array of keys for ignore changes');
