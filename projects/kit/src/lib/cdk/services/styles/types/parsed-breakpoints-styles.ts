import {CssPropName} from './css-prop.name';
import {CssPropValue} from './css-prop.value';

export type StylesMap = Map<CssPropName, CssPropValue>;

export interface ParsedBreakpointsStyles {
  styles: StylesMap;
  stylesByBreakpoints: Map<string, StylesMap>;
}

