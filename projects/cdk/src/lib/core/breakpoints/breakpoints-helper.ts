import {Breakpoint, Breakpoints, BreakpointValue} from './breakpoints';

export class BreakpointsHelper {
  static keys(): Breakpoint[] {
    return Object.keys(Breakpoints) as Breakpoint[];
  }

  static values(keys?: Breakpoint[]): BreakpointValue[] {
    if (keys) {
      return keys.map(key => Breakpoints[key]);
    }
    return Object.values(Breakpoints) as BreakpointValue[];
  }
}
