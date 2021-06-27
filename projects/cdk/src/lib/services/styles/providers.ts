import {ChangesState} from '../changes-state';
import {BreakpointsStylesState} from './breakpoints-styles.state';
import {BreakpointsStylesParserService} from './parser/breakpoints-styles-parser.service';
import {BreakpointsStylesManager} from './breakpoints-styles.manager';
import {StylesService} from './styles.service';
import {Injector, Provider} from '@angular/core';
import {
  CLASSES_FACTORIES, CLASSES_MAP,
  ClassesFactory,
  STYLES_FACTORIES, STYLES_NAMES_MAP,
  STYLES_VALUES_MAP,
  StylesFactory,
  StylesProvidersFactory
} from './tokens';
import {GenericObject} from '../../types/generic-object';
import {ClassesService} from './classes.service';
import {StylesParserService} from './parser/styles-parser.service';
import {ClassesParserService} from './parser/classes-parser.service';
import {StringObject} from '../../types';


type StylesFactories = StylesProvidersFactory | GenericObject<StylesFactory>;
type ClassesFactories = ((injector: Injector) => GenericObject<ClassesFactory>) | GenericObject<ClassesFactory>;

interface ProvidersOptions {
  stylesNamesMap?: StringObject;
  stylesValuesMap?: StringObject;
  stylesFactories?: StylesFactories;
  classesFactories?: ClassesFactories;
  classesMap?: GenericObject<string[]>;
}

export const BREAKPOINTS_STYLES_PROVIDERS = [
  StylesService,
  ChangesState,
  BreakpointsStylesState,
  BreakpointsStylesParserService,
  BreakpointsStylesManager,
  StylesParserService,
  ClassesParserService,
  ClassesService
];


export function breakpointsStylesProviders(
  {
    stylesNamesMap,
    stylesValuesMap,
    stylesFactories,
    classesFactories,
    classesMap
  }: ProvidersOptions): Provider[] {
  const providers: Provider[] = BREAKPOINTS_STYLES_PROVIDERS;
  if (stylesNamesMap) {
    providers.push({
      provide: STYLES_NAMES_MAP,
      useValue: stylesNamesMap,
      multi: true
    });
  }

  if (stylesValuesMap) {
    providers.push({provide: STYLES_VALUES_MAP, useValue: stylesValuesMap, multi: true});
  }

  if (stylesFactories) {
    if (typeof stylesFactories === 'function') {
      providers.push({provide: STYLES_FACTORIES, useFactory: stylesFactories, multi: true, deps: [Injector]});
    } else {
      providers.push({provide: STYLES_FACTORIES, useValue: stylesFactories, multi: true});
    }

  }

  if (classesFactories) {
    if (typeof classesFactories === 'function') {
      providers.push({provide: CLASSES_FACTORIES, useFactory: classesFactories, multi: true, deps: [Injector]});
    } else {
      providers.push({provide: CLASSES_FACTORIES, useValue: classesFactories, multi: true});
    }
  }

  if (classesMap) {
    providers.push({provide: CLASSES_MAP, useValue: classesMap, multi: true});
  }

  return providers;
}
