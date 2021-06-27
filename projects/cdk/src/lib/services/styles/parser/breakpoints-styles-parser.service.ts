import {Injectable} from '@angular/core';
import {StylesParserService} from './styles-parser.service';
import {StylesAndClasses, stylesAndClassesFactory, StylesMap} from './styles-and-classes';
import {ClassesParserService} from './classes-parser.service';
import {breakpointFromPropName, breakpointNameFromPropName, purePropName} from './helpers';
import {Breakpoint} from '../../../core';
import {StringObject} from '../../../types';

@Injectable()
export class BreakpointsStylesParserService {
  constructor(private stylesParser: StylesParserService, private classesParser: ClassesParserService) {
  }

  parse(props: StylesMap): StylesAndClasses {
    const parsed = stylesAndClassesFactory();
    for (const [name, value] of props.entries()) {
      const pureName = purePropName(name);
      const breakpoint = breakpointFromPropName(name);
      const styles = this.stylesParser.parse(pureName, value, props, breakpointNameFromPropName(name));
      const classes = this.classesParser.parse(pureName, value, props);
      if (breakpoint) {
        this.generateBreakpointsMaps(parsed, breakpoint);
        this.setStyles(parsed.stylesByBreakpoints.get(breakpoint) as StylesMap, styles);
        parsed.classesByBreakpoints.set(breakpoint, [...parsed.classesByBreakpoints.get(breakpoint) as string[], ...classes]);
      } else {
        this.setStyles(parsed.styles, styles);
        parsed.classes = [...parsed.classes, ...classes];
      }
    }

    return parsed;
  }

  private setStyles(map: StylesMap, props: StringObject): void {
    for (const [key, value] of Object.entries(props)) {
      map.set(key, value);
    }
  }


  private generateBreakpointsMaps(map: StylesAndClasses, breakpoint: Breakpoint): void {
    if (!map.stylesByBreakpoints.has(breakpoint)) {
      map.stylesByBreakpoints.set(breakpoint, new Map<string, string>());
    }

    if (!map.classesByBreakpoints.has(breakpoint)) {
      map.classesByBreakpoints.set(breakpoint, []);
    }
  }
}
