import {Inject, Optional} from '@angular/core';
import {StylesService} from './styles.service';
import {StringObject} from '../../types';
import {PROPS_MAP, PROPS_VALUES_MAP} from './styles-service.tokens';
import {Breakpoint} from '../../core';
import {Observable} from 'rxjs';
import {BreakpointsStylesParser, ParsedBreakpointsStyles} from './helpers/parser/breakpoint-styles-parser';
import {StringOrNumberObject} from '../../types';
import {tap} from 'rxjs/operators';
import {GroupedStylesByBreakpoints} from './types/grouped-styles-by-breakpoints';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

export class BreakpointsStylesManager {
  private currentBreakpointsStyles: StringObject = {};
  private withoutBreakpointStyles: Partial<CSSStyleDeclaration> = {};
  private styles: StringOrNumberObject = {};
  private breakpointsStyles: GroupedStylesByBreakpoints = {};

  constructor(private stylesManager: StylesService,
              private breakpointObserver: BreakpointObserver,
              @Inject(PROPS_VALUES_MAP) @Optional() readonly propValuesMap?: StringObject,
              @Inject(PROPS_MAP) @Optional() readonly propNamesMap?: StringObject) {
  }

  style(styles: StringOrNumberObject): void {
    this.clearCurrentStyles();
    this.styles = styles;
    const {breakpointsStyles, withoutBreakpointsStyles} = this.parseBreakpoints(this.styles);
    this.withoutBreakpointStyles = withoutBreakpointsStyles;
    this.breakpointsStyles = breakpointsStyles;
    this.stylesManager.style(withoutBreakpointsStyles);
  }

  hasBreakpoints(): boolean {
    return Boolean(Object.keys(this.breakpointsStyles).length);
  }

  listen(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(Object.keys(this.breakpointsStyles) as Breakpoint[]).pipe(tap((breakpoints => {
      this.clearCurrentStyles();
      this.stylesManager.style(this.withoutBreakpointStyles);


      for (const [breakpoint, breakpointStyles] of Object.entries(this.breakpointsStyles)) {
        if (breakpoints.breakpoints[breakpoint]) {
          this.currentBreakpointsStyles = Object.assign(this.currentBreakpointsStyles, breakpointStyles);
        }
      }

      this.stylesManager.style(this.currentBreakpointsStyles);
    })));
  }

  private clearCurrentStyles(): void {
    this.stylesManager.remove(Object.keys(this.withoutBreakpointStyles) as Array<keyof CSSStyleDeclaration>);
    this.stylesManager.remove(Object.keys(this.currentBreakpointsStyles) as Array<keyof CSSStyleDeclaration>);
    this.currentBreakpointsStyles = {};
  }


  private parseBreakpoints(styles: StringOrNumberObject): ParsedBreakpointsStyles {
    return new BreakpointsStylesParser({
      styles,
      propsMap: this.propNamesMap || {},
      propsValuesMap: this.propValuesMap || {}
    }).parse();
  }
}
