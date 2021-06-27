import {Breakpoint} from '../../../core';

export type StylesMap = Map<string, string>;

export interface StylesAndClasses {
  styles: StylesMap;
  stylesByBreakpoints: Map<Breakpoint, StylesMap>;
  classes: string[];
  classesByBreakpoints: Map<Breakpoint, string[]>;
}


export const stylesAndClassesFactory = (): StylesAndClasses => {
  return {
    styles: new Map<string, string>(),
    stylesByBreakpoints: new Map<Breakpoint, StylesMap>(),
    classesByBreakpoints: new Map<Breakpoint, string[]>(),
    classes: []
  }
}
