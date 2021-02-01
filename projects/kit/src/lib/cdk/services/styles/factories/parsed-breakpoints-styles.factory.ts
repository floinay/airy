import {CssPropName} from '../types/css-prop.name';
import {CssPropValue} from '../types/css-prop.value';
import {ParsedBreakpointsStyles, StylesMap} from '../types/parsed-breakpoints-styles';

export function parsedBreakpointsStylesFactory(): ParsedBreakpointsStyles {
  return {
    styles: new Map<CssPropName, CssPropValue>(),
    stylesByBreakpoints: new Map<string, StylesMap>()
  };
}
