import {SimpleChanges} from '@angular/core';
import {InputsList} from './types/inputs-list';
import {BreakpointsStyles} from './breakpoints-styles';

type PropValue = string | null;

export class BreakpointsChanges {
  private previousProps: InputsList = {};
  private currentProps: InputsList = {};
  previous!: BreakpointsStyles;
  current!: BreakpointsStyles;

  constructor(private changes: SimpleChanges) {
    for (const change of Object.keys(this.changes)) {
      const value = this.changes[change];
      this.setCurrent(change, value.currentValue);
      this.setPrevious(change, value.previousValue);
    }
    this.previous = new BreakpointsStyles(this.previousProps);
    this.current = new BreakpointsStyles(this.currentProps);
  }

  private setPrevious(key: string, value: PropValue): void {
    if (!(value === undefined || value === null)) {
      this.previousProps[key] = value;
    }
  }

  private setCurrent(key: string, value: PropValue): void {
    if (!(value === undefined || value === null)) {
      this.currentProps[key] = value;
    }
  }
}
