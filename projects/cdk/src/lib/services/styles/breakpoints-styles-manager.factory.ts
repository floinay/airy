import {Inject, Injectable, Optional} from '@angular/core';
import {BreakpointsStylesManager} from './breakpoints-styles.manager';
import {StylesService} from './styles.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {PROPS_MAP, PROPS_VALUES_MAP} from './styles-service.tokens';
import {StringObject} from '../../types';

@Injectable({providedIn: 'root'})
export class BreakpointsStylesManagerFactory {
  constructor(private stylesManager: StylesService,
              private breakpointObserver: BreakpointObserver,
              @Inject(PROPS_VALUES_MAP) @Optional() readonly propValuesMap?: StringObject,
              @Inject(PROPS_MAP) @Optional() readonly propNamesMap?: StringObject) {
  }

  make(): BreakpointsStylesManager {
    return new BreakpointsStylesManager(this.stylesManager, this.breakpointObserver, this.propValuesMap, this.propNamesMap);
  }
}
