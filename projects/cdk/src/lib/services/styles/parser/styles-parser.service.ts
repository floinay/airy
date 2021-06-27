import {Inject, Injectable, Optional} from '@angular/core';
import {mergeArrayOfObjects} from './helpers';
import {STYLES_FACTORIES, STYLES_NAMES_MAP, STYLES_VALUES_MAP, StylesFactory} from '../tokens';
import {GenericObject} from '../../../types/generic-object';
import {StringObject} from '../../../types';
import {BreakpointName} from '../../../core';

@Injectable()
export class StylesParserService {
  private readonly stylesNamesMap = mergeArrayOfObjects(this.multiStylesNamesMap);
  private readonly stylesValuesMap = mergeArrayOfObjects(this.multiStylesValuesMap);
  private readonly stylesFactories = mergeArrayOfObjects(this.multiStylesFactories);

  constructor(@Inject(STYLES_NAMES_MAP) @Optional() readonly multiStylesNamesMap?: StringObject[],
              @Inject(STYLES_VALUES_MAP) @Optional() readonly multiStylesValuesMap?: StringObject[],
              @Inject(STYLES_FACTORIES) @Optional() readonly multiStylesFactories?: GenericObject<StylesFactory>[]) {
  }

  parse(name: string, value: string, propertiesMap: Map<string, string>, breakpointName?: BreakpointName): StringObject {
    if (name in this.stylesFactories) {
      return this.stylesFactories[name](value, propertiesMap, breakpointName);
    }

    name = this.stylesNamesMap[name] || name;
    value = this.stylesValuesMap[value] || this.defaultValue(value) || value;

    return {[name]: value};
  }


  private isDefaultValue(value: string): boolean {
    return !value || value === '' && 'default' in this.stylesValuesMap;
  }

  private defaultValue(value: string): string | null {
    return this.isDefaultValue(value) ? this.stylesValuesMap.default : null;
  }
}
