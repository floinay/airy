import {NavigationStart} from '@angular/router';

export interface OnRouteStartAction {
  onRouteStart(event: NavigationStart): void;
}
