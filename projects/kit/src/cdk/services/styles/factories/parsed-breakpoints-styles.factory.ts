import {CssPropValue, ParsedBreakpointsStyles, StylesMap} from '../types';

export function parsedBreakpointsStylesFactory(): ParsedBreakpointsStyles {
  return {
    styles: new Map<string, CssPropValue>(),
    stylesByBreakpoints: new Map<string, StylesMap>()
  };
}
