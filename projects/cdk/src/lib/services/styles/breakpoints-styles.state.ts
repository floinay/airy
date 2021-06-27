import {Injectable} from '@angular/core';
import {ChangesState, ChangesStateSnapshot} from '../changes-state';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointsStylesParserService} from './parser/breakpoints-styles-parser.service';
import {StylesAndClasses, stylesAndClassesFactory} from './parser/styles-and-classes';


@Injectable()
export class BreakpointsStylesState {
  state: StylesAndClasses = stylesAndClassesFactory();

  constructor(private changes: ChangesState<string, string>, private parser: BreakpointsStylesParserService) {
  }

  watch(): Observable<StylesAndClasses> {
    return this.changes.watch().pipe(map(changes => {
      this.patch(changes);

      return this.state;
    }));
  }


  patch(changes: ChangesStateSnapshot<string, string>): void {
    this.state = this.parser.parse(changes.changes);
  }
}
