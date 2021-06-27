import {Injectable} from '@angular/core';
import {BreakpointsStylesState} from './breakpoints-styles.state';
import {Observable, of} from 'rxjs';
import {debounceTime, switchMap, tap} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StylesService} from './styles.service';
import {mapToObject} from '../../helpers/map-to-object';
import {BreakpointState} from '@angular/cdk/layout/breakpoints-observer';
import {StringObject} from '../../types';
import {StylesAndClasses, StylesMap} from './parser/styles-and-classes';
import {ClassesService} from './classes.service';
import {concatUnique} from '../../helpers';
import {Breakpoint} from '../../core';

@Injectable()
export class BreakpointsStylesManager {
  private stateSnapshot?: StylesAndClasses;
  private previousBreakpointsStyles: string[] = [];
  private previousGlobalStyles: string[] = [];
  private previousGlobalClasses: string[] = [];
  private previousBreakpointsClasses: string[] = [];

  constructor(private state: BreakpointsStylesState,
              private stylesService: StylesService,
              private classesService: ClassesService,
              private breakpointsObserver: BreakpointObserver
  ) {
  }

  watch(): Observable<unknown> {
    return this.state.watch().pipe(tap(((state) => {
        this.clearPreviousStylesAndClasses();
        this.stateSnapshot = state;
      })),
      switchMap(this.observeBreakpoints.bind(this)),
      tap(() => this.clearPreviousBreakpointsStyles()),
      tap(() => this.setGlobalStyles()),
      debounceTime(0),
      tap((breakpointsOrState) => {
        if (this.hasBreakpoints()) {
          this.setBreakpointsStylesAndClasses(breakpointsOrState as BreakpointState);
        }
      })
    );
  }


  private clearPreviousBreakpointsStyles(): void {
    if (this.previousBreakpointsStyles.length) {
      this.stylesService.remove(this.previousBreakpointsStyles);
      this.previousBreakpointsStyles = [];
    }

    if (this.previousBreakpointsClasses.length) {
      this.classesService.remove(this.previousBreakpointsClasses);
      this.previousBreakpointsClasses = [];
    }
  }

  private clearPreviousStylesAndClasses(): void {
    if (this.previousGlobalClasses) {
      this.classesService.remove(this.previousGlobalClasses);
      this.previousBreakpointsClasses = [];
    }

    if (this.previousGlobalStyles.length) {
      this.stylesService.remove(this.previousGlobalStyles);
      this.previousGlobalStyles = [];
    }

    this.clearPreviousBreakpointsStyles();
  }

  private setGlobalStyles(): void {
    if (this.stateSnapshot) {
      const styles = mapToObject<StringObject>(this.stateSnapshot.styles);
      this.previousGlobalStyles = Object.keys(styles);
      this.stylesService.style(styles);

      this.previousGlobalClasses = this.stateSnapshot.classes;
      this.classesService.add(this.stateSnapshot.classes);
    }
  }

  private observeBreakpoints(): Observable<BreakpointState> | Observable<StylesAndClasses> {
    if (this.stateSnapshot && this.hasBreakpoints()) {
      return this.breakpointsObserver.observe(
        concatUnique(
          Array.from(this.stateSnapshot.stylesByBreakpoints.keys()),
          Array.from(this.stateSnapshot.classesByBreakpoints.keys())
        )
      );
    }

    return of(this.stateSnapshot as StylesAndClasses);
  }

  private hasBreakpoints(): boolean {
    return Boolean(this.stateSnapshot?.stylesByBreakpoints.size || this.stateSnapshot?.classesByBreakpoints.size);
  }


  private setBreakpointsStylesAndClasses(breakpoints: BreakpointState): void {
    if (this.stateSnapshot) {
      let styles: StringObject = {};
      let classes: string[] = [];
      for (const [breakpoint, breakpointState] of Object.entries(breakpoints.breakpoints)) {
        if (breakpointState) {
          if (this.stateSnapshot.stylesByBreakpoints.has(breakpoint as Breakpoint)) {
            styles = Object.assign(styles, mapToObject(this.stateSnapshot.stylesByBreakpoints.get(breakpoint as Breakpoint) as StylesMap));
          }

          if (this.stateSnapshot.classesByBreakpoints.has(breakpoint as Breakpoint)) {
            classes = [...classes, ...this.stateSnapshot.classesByBreakpoints.get(breakpoint as Breakpoint) as []];
          }
        }
      }
      this.stylesService.style(styles);
      this.classesService.add(classes);
      this.previousBreakpointsStyles = Object.keys(styles) as string[];
      this.previousBreakpointsClasses = classes;
    }
  }
}
