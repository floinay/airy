import {BreakpointObserver as CdkBreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {Breakpoint, Breakpoints} from './breakpoints';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BreakpointObserver extends CdkBreakpointObserver {

  isMatched(keys: Breakpoint[]): boolean {
    return super.isMatched(keys);
  }

  observe(keys: Breakpoint[]): Observable<BreakpointState> {
    return super.observe(Breakpoints.values(keys)).pipe(map(value => {
      return {matches: value.matches, breakpoints: this.mapBpValuesToKeys(value.breakpoints)};
    }));
  }

  matches$(keys: Breakpoint[]): Observable<Breakpoint[]> {
    return this.observe(keys).pipe(
      map(value => Object.keys(value.breakpoints).filter(key => value.breakpoints[key]) as Breakpoint[])
    );
  }


  private mapBpValuesToKeys(breakpoints: { [key: string]: boolean }): { [key: string]: boolean } {
    const mapped: { [key: string]: boolean } = {};
    for (const key of Object.keys(breakpoints)) {
      mapped[Breakpoints.breakpointByMedia(key)] = breakpoints[key];
    }

    return mapped;
  }
}
