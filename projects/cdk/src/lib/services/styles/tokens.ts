import {InjectionToken, Injector} from '@angular/core';
import {GenericObject} from '../../types/generic-object';
import {BreakpointName} from '../../core';
import {StringObject} from '../../types';

export type StylesFactory = (value: any, currentScopeStyles: Map<string, string>, breakpoint: BreakpointName | undefined) => StringObject;
export type ClassesFactory = (value: string, currentScopeProps: Map<string, string>) => string[];
export type StylesProvidersFactory = (injector: Injector) => GenericObject<StylesFactory>;

export const STYLES_NAMES_MAP = new InjectionToken<StringObject>('Breakpoints styles manager prop names map');
export const STYLES_VALUES_MAP = new InjectionToken<StringObject>('Breakpoints styles manager props names values map');
export const STYLES_FACTORIES = new InjectionToken<GenericObject<StylesFactory>>('Breakpoints styles manager Css Props Generators');
export const CLASSES_FACTORIES = new InjectionToken<GenericObject<ClassesFactory>>('Breakpoints classes map');
export const CLASSES_MAP = new InjectionToken<GenericObject<string[]>>('Breakpoints classes map');
