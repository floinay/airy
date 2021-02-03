import {CssPropValue} from './css-prop.value';

export type StylesMap = Map<string, CssPropValue>;

export interface ParsedBreakpointsStyles {
  styles: StylesMap;
  stylesByBreakpoints: Map<string, StylesMap>;
}

