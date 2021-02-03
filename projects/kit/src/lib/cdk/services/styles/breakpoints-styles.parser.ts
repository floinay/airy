import {Inject, Injectable, Optional} from '@angular/core';
import {CSS_PROPS_GENERATORS, CSS_PROPS_KEYS_MAP, CSS_PROPS_VALUES_MAP} from './providers/tokens';
import {StringObject} from '../../types';
import {Breakpoints, BreakpointsHelper} from '../../core';
import {camelToKebab, firstLetterToLower} from '../../helpers';
import {parsedBreakpointsStylesFactory} from './factories/parsed-breakpoints-styles.factory';
import {parsedDeletedBreakpointsPropsFactory} from './factories/parsed-deleted-breakpoints-props.factory';
import {
  CssPropName,
  CssProps,
  CssPropsGenerators,
  CssPropValue,
  ParsedBreakpointsStyles,
  ParsedDeletedBreakpointsProps,
  StylesMap
} from './types';


@Injectable()
export class BreakpointsStylesParser {
  private propsNamesMap = arrayOfObjectsToObject(this.propsNamesMapArray);
  private propsValuesMap = arrayOfObjectsToObject(this.propsValuesMapArray);
  private propsGenerators = arrayOfObjectsToObject(this.propsGeneratorsArray);
  private parsed: ParsedBreakpointsStyles = parsedBreakpointsStylesFactory();

  constructor(@Inject(CSS_PROPS_KEYS_MAP) @Optional() readonly propsNamesMapArray?: StringObject[],
              @Inject(CSS_PROPS_GENERATORS) @Optional() readonly propsGeneratorsArray?: CssPropsGenerators[],
              @Inject(CSS_PROPS_VALUES_MAP) @Optional() readonly propsValuesMapArray?: StringObject[]) {
  }

  parse(map: Map<string, string>): ParsedBreakpointsStyles {
    this.parsed = parsedBreakpointsStylesFactory();

    for (const [name, value] of map.entries()) {
      this.parseOne(name, value);
    }

    return this.parsed;
  }

  private parseOne(name: string, value: string): void {
    const breakpoint = this.breakpoint(name);
    const cssProps = this.props(name, value);

    if (breakpoint) {
      this.generateMapForBreakpoint(breakpoint);
      this.setStyles(this.parsed.stylesByBreakpoints.get(breakpoint) as StylesMap, cssProps);
    } else {
      this.setStyles(this.parsed.styles, cssProps);
    }
  }

  private setStyles(map: Map<string, CssPropValue>, props: CssProps): void {
    for (const [key, value] of Object.entries(props)) {
      map.set(key, value);
    }
  }

  private generateMapForBreakpoint(breakpoint: string): void {
    if (!this.parsed.stylesByBreakpoints.has(breakpoint)) {
      this.parsed.stylesByBreakpoints.set(breakpoint, new Map<string, CssPropValue>());
    }
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

  hasGenerator(name: string): boolean {
    return this.withoutBreakpoint(name) in this.propsGenerators;
  }

  generateProps(name: string, value: string): CssProps {
    return this.propsGenerators[name](name, value);
  }


  isBreakpointProp(name: string): boolean {
    return Boolean(BreakpointsHelper.keys().find(key => name.startsWith(key)));
  }

  propName(name: string): CssPropName {
    const withoutBreakpoint = firstLetterToLower(this.withoutBreakpoint(name));

    return (this.propsNamesMap[withoutBreakpoint] || camelToKebab(withoutBreakpoint)) as CssPropName;
  }

  props(name: string, value: string): CssProps {
    if (this.hasGenerator(name)) {
      return this.generateProps(name, value);
    }
    const style: CssProps = {};
    const parsedName = this.propName(name);
    style[parsedName] = this.defaultValue(value) || this.propsValuesMap[value] || value;
    return style;
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


function arrayOfObjectsToObject<T>(map?: { [key: string]: T }[]): { [key: string]: T } {
  let object = {};
  if (map) {
    for (const o of map) {
      object = Object.assign(object, o);
    }
  }

  return object;
}
