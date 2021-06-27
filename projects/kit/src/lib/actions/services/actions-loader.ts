import {Inject, Injectable} from '@angular/core';
import {AIR_ACTIONS} from '../tokens';
import {Action, OnAppInitAction, OnRouteEndAction} from '../interfaces';
import {PreloadAction} from '@airy-ui/kit/actions/interfaces/preload.action';
import {OnRouteStartAction} from '@airy-ui/kit/actions/interfaces/on-route-start.action';

@Injectable({providedIn: 'root'})
export class ActionsLoader {
  readonly onRouteNavigationEnd: OnRouteEndAction[] = [];
  readonly onAppInit: OnAppInitAction[] = [];
  readonly onPreload: PreloadAction[] = [];
  readonly onRouteNavigationStart: OnRouteStartAction[] = [];

  constructor(@Inject(AIR_ACTIONS) readonly providers: Action[]) {
    this.setProviders();
  }

  private setProviders(): void {
    this.providers.forEach((provider) => {
      if ('onRouteEnd' in provider) {
        this.onRouteNavigationEnd.push(provider);
      }

      if ('onRouteStart' in provider) {
        this.onRouteNavigationStart.push(provider);
      }

      if ('onInit' in provider) {
        this.onAppInit.push(provider);
      }

      if ('preload' in provider) {
        this.onPreload.push(provider);
      }
    });
  }
}
