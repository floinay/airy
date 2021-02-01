import {Inject, Injectable, Optional} from '@angular/core';
import {CSS_PROPS_KEYS_MAP, CSS_PROPS_VALUES_MAP} from './providers/tokens';
import {StringObject} from '../../types';
import {Breakpoints, BreakpointsHelper} from '../../core';
import {camelToKebab, firstLetterToLower} from '../../helpers';
import {ParsedBreakpointsStyles} from './types/parsed-breakpoints-styles';
import {CssPropName} from './types/css-prop.name';
import {CssPropValue} from './types/css-prop.value';
import {parsedBreakpointsStylesFactory} from './factories/parsed-breakpoints-styles.factory';
import {ParsedDeletedBreakpointsProps} from './types/parsed-deleted-breakpoints-props';
import {parsedDeletedBreakpointsPropsFactory} from './factories/parsed-deleted-breakpoints-props.factory';


@Injectable()
export class BreakpointsStylesParser {
  private propsNamesMap = arrayOfObjectsToObject(this.propsNamesMapArray);
  private propsValuesMap = arrayOfObjectsToObject(this.propsValuesMapArray);

  constructor(@Inject(CSS_PROPS_KEYS_MAP) @Optional() readonly propsNamesMapArray?: StringObject[],
              @Inject(CSS_PROPS_VALUES_MAP) @Optional() readonly propsValuesMapArray?: StringObject[]) {
  }

  parse(map: Map<string, string>): ParsedBreakpointsStyles {
    const parsed: ParsedBreakpointsStyles = parsedBreakpointsStylesFactory();

    for (const [key, value] of map.entries()) {
      const breakpoint = this.breakpoint(key);
      const cssPropName = this.propName(key);
      const cssPropValue = this.propValue(value);

      if (breakpoint) {
        if (!parsed.stylesByBreakpoints.has(breakpoint)) {
          parsed.stylesByBreakpoints.set(breakpoint, new Map<CssPropName, CssPropValue>());
        }

        parsed.stylesByBreakpoints.get(breakpoint)?.set(cssPropName, cssPropValue);
      } else {
        parsed.styles.set(cssPropName, cssPropValue);
      }
    }

    return parsed;
  }

  parseDeleted(keys: string[]): ParsedDeletedBreakpointsProps {
    const parsed = parsedDeletedBreakpointsPropsFactory();

    for (const key of keys) {
      const breakpoint = this.breakpoint(key);
      const cssPropName = this.propName(key);

      if (breakpoint) {
        if (!parsed.propsByBreakpoints.has(breakpoint)) {
          parsed.propsByBreakpoints.set(breakpoint, []);
        }

        parsed.propsByBreakpoints.get(breakpoint)?.push(cssPropName);
      } else {
        parsed.props.push(cssPropName);
      }
    }

    return parsed;
  }


  isBreakpointProp(name: string): boolean {
    return Boolean(BreakpointsHelper.keys().find(key => name.startsWith(key)));
  }

  propName(name: string): CssPropName {
    const withoutBreakpoint = firstLetterToLower(this.withoutBreakpoint(name));

    return (this.propsNamesMap[withoutBreakpoint] || camelToKebab(withoutBreakpoint)) as CssPropName;
  }

  propValue(value: string): string | number {
    return this.defaultValue(value) || this.propsValuesMap[value] || value;
  }

  breakpoint(name: string): string | null {
    if (this.isBreakpointProp(name)) {
      const bp = name.split('Air')[0] as keyof BreakpointsHelper;
      return Breakpoints[bp];
    }

    return null;
  }

  private isDefaultValue(value: string): boolean {
    return !value || value === '' && 'default' in this.propsValuesMap;
  }

  private defaultValue(value: string): string | number | null {
    return this.isDefaultValue(value) ? this.propsValuesMap.default : null;
  }

  private withoutBreakpoint(name: string): string {
    return name.split(this.isBreakpointProp(name) ? 'Air' : 'air')[1] || name;
  }
}


function arrayOfObjectsToObject(map?: StringObject[]): StringObject {
  let object = {};
  if (map) {
    for (const o of map) {
      object = Object.assign(object, o);
    }
  }

  return object;
}
