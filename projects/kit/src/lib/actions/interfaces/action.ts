import {OnAppInitAction} from '@airy-ui/kit/actions/interfaces/on-app-init.action';
import {OnRouteEndAction} from '@airy-ui/kit/actions/interfaces/on-route-end.action';
import {Type} from '@angular/core';
import {PreloadAction} from '@airy-ui/kit/actions/interfaces/preload.action';
import {OnRouteStartAction} from '@airy-ui/kit/actions/interfaces/on-route-start.action';

export type Action =
  Type<OnAppInitAction>
  | Type<OnRouteEndAction>
  | Type<PreloadAction>
  | Type<OnRouteStartAction>
  | Type<any>;

