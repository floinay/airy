import {InjectionToken} from '@angular/core';
import {StringObject} from '../../../types';
import {CssPropsGenerators} from '../types';

export const CSS_PROPS_KEYS_MAP = new InjectionToken<StringObject>('Breakpoints styles manager prop names map');
export const CSS_PROPS_VALUES_MAP = new InjectionToken<StringObject>('Breakpoints styles manager props names values map');
export const CSS_PROPS_GENERATORS = new InjectionToken<CssPropsGenerators>('Breakpoints styles manager Css Props Generators');
