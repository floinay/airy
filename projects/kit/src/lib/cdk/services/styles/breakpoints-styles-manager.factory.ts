import {Injectable} from '@angular/core';
import {BreakpointsStylesManager} from './breakpoints-styles.manager';
import {StylesService} from './styles.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StringObject} from '../../types';

@Injectable()
export class BreakpointsStylesManagerFactory {
  constructor(private stylesManager: StylesService,
              private breakpointObserver: BreakpointObserver) {
  }

  make(propsMap: StringObject, valuesMap: StringObject): BreakpointsStylesManager {
    return new BreakpointsStylesManager(this.stylesManager, this.breakpointObserver, valuesMap, propsMap);
  }
}
