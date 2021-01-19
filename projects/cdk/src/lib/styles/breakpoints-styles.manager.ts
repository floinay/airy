import {Inject, Injectable, Optional} from '@angular/core';
import {StylesManager} from './styles.manager';
import {StringObject} from '../types/string-object';
import {PROP_NAMES_MAP, PROP_VALUES_MAP} from './styles-manager.tokens';
import {Breakpoint, BreakpointObserver} from '../breakpoints';
import {Observable} from 'rxjs';
import {BreakpointsStylesParser, ParsedBreakpointsStyles} from './helpers/parser/breakpoint-styles-parser';
import {StringOrNumberObject} from '../types/string-or-number-object';
import {tap} from 'rxjs/operators';

@Injectable()
export class BreakpointsStylesManager {
  private currentBreakpointsStyles: StringObject = {};
  private withoutBreakpointStyles: Partial<CSSStyleDeclaration> = {};

  constructor(private stylesManager: StylesManager,
              private breakpointObserver: BreakpointObserver,
              @Inject(PROP_VALUES_MAP) @Optional() readonly propValuesMap?: StringObject,
              @Inject(PROP_NAMES_MAP) @Optional() readonly propNamesMap?: StringObject) {
  }

  listen(styles: StringOrNumberObject): Observable<Breakpoint[]> {
    this.clearAllPreviousStyles();

    const {breakpointsStyles, withoutBreakpointsStyles} = this.parseBreakpoints(styles);
    this.withoutBreakpointStyles = withoutBreakpointsStyles;
    this.stylesManager.style(withoutBreakpointsStyles);

    return this.breakpointObserver.matches$(Object.keys(breakpointsStyles) as Breakpoint[]).pipe(tap((breakpoints => {
      this.clearCurrentStyles();
      for (const [breakpoint, breakpointStyles] of Object.entries(breakpointsStyles)) {
        if (breakpoints.includes(breakpoint as Breakpoint)) {
          this.currentBreakpointsStyles = Object.assign(this.currentBreakpointsStyles, breakpointStyles);
        }
      }

      this.stylesManager.style(this.currentBreakpointsStyles);
    })));
  }

  private clearCurrentStyles(): void {
    this.stylesManager.remove(Object.keys(this.currentBreakpointsStyles) as Array<keyof CSSStyleDeclaration>);
  }

  private clearAllPreviousStyles(): void {
    this.clearCurrentStyles();
    this.stylesManager.remove(Object.keys(this.withoutBreakpointStyles) as Array<keyof CSSStyleDeclaration>);
  }

  private parseBreakpoints(styles: StringOrNumberObject): ParsedBreakpointsStyles {
    return new BreakpointsStylesParser({
      styles,
      propsMap: this.propNamesMap || {},
      propsValuesMap: this.propValuesMap || {}
    }).parse();
  }
}
