import {GroupedStylesByBreakpoints} from '../../types/grouped-styles-by-breakpoints';
import {StringObject} from '../../../../types';
import {BreakpointStyle} from './breakpoint-style';

interface BreakpointStylesOptions {
  styles: { [key: string]: string | number };
  propsMap: StringObject;
  propsValuesMap: StringObject;
}

export interface ParsedBreakpointsStyles {
  breakpointsStyles: GroupedStylesByBreakpoints;
  withoutBreakpointsStyles: Partial<CSSStyleDeclaration>;
}

export class BreakpointsStylesParser {
  constructor(private options: BreakpointStylesOptions) {
  }

  parse(): ParsedBreakpointsStyles {
    const breakpointsStyles: GroupedStylesByBreakpoints = {};
    const withoutBreakpointsStyles: StringObject = {};

    for (const [propName, propValue] of Object.entries(this.options.styles)) {
      const style = new BreakpointStyle({
        propName,
        propValue,
        propsMap: this.options.propsMap,
        propValuesMap: this.options.propsValuesMap
      });
      const breakpoint = style.breakpoint();

      if (breakpoint) {
        if (!(breakpoint in breakpointsStyles)) {
          breakpointsStyles[breakpoint] = {};
        }

        breakpointsStyles[breakpoint][style.propName()] = style.propValue() as string;
      } else {
        withoutBreakpointsStyles[style.propName()] = style.propValue() as string;
      }
    }

    return {breakpointsStyles, withoutBreakpointsStyles};
  }

}
