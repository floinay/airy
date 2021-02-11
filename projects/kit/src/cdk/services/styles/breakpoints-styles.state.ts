import {Injectable} from '@angular/core';
import {ChangesState, ChangesStateSnapshot} from '../changes-state';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {parsedBreakpointsStylesFactory, parsedDeletedBreakpointsPropsFactory} from './factories';
import {BreakpointsStylesParser} from './breakpoints-styles.parser';
import {ParsedBreakpointsStyles, ParsedDeletedBreakpointsProps} from './types';


export interface BreakpointsStylesStateInterface {
  styles: ParsedBreakpointsStyles;
  deleted: ParsedDeletedBreakpointsProps;
  recent: ParsedBreakpointsStyles;
}

@Injectable()
export class BreakpointsStylesState {
  state: BreakpointsStylesStateInterface = {
    styles: parsedBreakpointsStylesFactory(),
    deleted: parsedDeletedBreakpointsPropsFactory(),
    recent: parsedBreakpointsStylesFactory()
  };

  constructor(private changes: ChangesState<string, string>, private parser: BreakpointsStylesParser) {
  }

  watch(): Observable<BreakpointsStylesStateInterface> {
    return this.changes.watch().pipe(map(changes => {
      this.patch(changes);

      return this.state;
    }));
  }


  patch(snapshot: ChangesStateSnapshot<string, string>): void {
    this.state.styles = this.parser.parse(snapshot.changes);
    this.state.recent = this.parser.parse(snapshot.recent);
    this.state.deleted = this.parser.parseDeleted(snapshot.deleted);
  }
}
