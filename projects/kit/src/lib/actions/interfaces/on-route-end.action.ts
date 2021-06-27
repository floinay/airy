import {NavigationEnd} from '@angular/router';

export interface OnRouteEndAction {
  onRouteEnd(event: NavigationEnd): void;
}
