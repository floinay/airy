import {InjectionToken} from '@angular/core';
import {StringObject} from '../types/string-object';

export const PROP_NAMES_MAP = new InjectionToken<StringObject>('Breakpoints styles manager prop names map');
export const PROP_VALUES_MAP = new InjectionToken<StringObject>('Breakpoints styles manager props names values map');
