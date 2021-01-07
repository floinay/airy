import {Breakpoint as BreakpointType} from '../breakpoints';
import {InputsList} from './types/inputs-list';

export class Breakpoint {
  constructor(public type: BreakpointType | null, public properties: InputsList) {
  }
}
