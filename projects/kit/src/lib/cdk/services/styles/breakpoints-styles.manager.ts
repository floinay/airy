import {Injectable} from '@angular/core';
import {BreakpointsStylesState, BreakpointsStylesStateInterface} from './breakpoints-styles.state';
import {Observable, of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StylesService} from './styles.service';
import {mapToObject} from '../../helpers/map-to-object';
import {BreakpointState} from '@angular/cdk/layout/breakpoints-observer';
import {CssPropName} from './types';

@Injectable()
export class BreakpointsStylesManager {
  private stateSnapshot?: BreakpointsStylesStateInterface;
  private previousBreakpointsProps: CssPropName[] = [];

  constructor(private state: BreakpointsStylesState,
              private stylesService: StylesService,
              private breakpointsObserver: BreakpointObserver
  ) {
  }

  watch(): Observable<unknown> {
    return this.state.watch().pipe(tap(((state) => {
        this.clearPreviousStateStyles();
        this.stateSnapshot = state;
      })),
      switchMap(this.observeBreakpoints.bind(this)),
      tap((breakpointsOrState) => {
        this.clearPreviousBreakpointsProps();
        this.setGlobalProps();
        if (this.hasBreakpointsStyles()) {
          this.setBreakpointsProps(breakpointsOrState as BreakpointState);
        }
      })
    );
  }


  private clearPreviousBreakpointsProps(): void {
    if (this.previousBreakpointsProps.length) {
      this.stylesService.remove(this.previousBreakpointsProps);
      this.previousBreakpointsProps = [];
    }
  }

  private clearPreviousStateStyles(): void {
    if (this.stateSnapshot) {
      this.stylesService.remove(this.stateSnapshot.deleted.props);
      this.clearPreviousBreakpointsProps();
    }
  }

  private setGlobalProps(): void {
    if (this.stateSnapshot) {
      this.stylesService.style(mapToObject<Partial<CSSStyleDeclaration>>(this.stateSnapshot.styles.styles));
    }
  }

  private observeBreakpoints(): Observable<BreakpointState> | Observable<BreakpointsStylesStateInterface> {
    if (this.stateSnapshot && this.hasBreakpointsStyles()) {
      return this.breakpointsObserver.observe(Array.from(this.stateSnapshot.styles.stylesByBreakpoints.keys()));
    }

    return of(this.stateSnapshot as BreakpointsStylesStateInterface);
  }

  private hasBreakpointsStyles(): boolean {
    return Boolean(this.stateSnapshot?.styles.stylesByBreakpoints.size);
  }


  private setBreakpointsProps(breakpoints: BreakpointState): void {
    if (this.stateSnapshot) {
      let styles: Partial<CSSStyleDeclaration> = {};
      for (const [breakpoint, breakpointStyles] of this.stateSnapshot.styles.stylesByBreakpoints?.entries()) {
        if (breakpoints.breakpoints[breakpoint]) {
          styles = Object.assign(styles, mapToObject(breakpointStyles));
        }
      }
      this.stylesService.style(styles);
      this.previousBreakpointsProps = Object.keys(styles) as CssPropName[];
    }
  }
}
