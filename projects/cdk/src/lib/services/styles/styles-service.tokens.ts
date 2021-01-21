import {InjectionToken} from '@angular/core';
import {StringObject} from '../../types/string-object';

export const PROPS_MAP = new InjectionToken<StringObject>('Breakpoints styles manager prop names map');
export const PROPS_VALUES_MAP = new InjectionToken<StringObject>('Breakpoints styles manager props names values map');
