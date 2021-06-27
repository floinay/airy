import {Injectable} from '@angular/core';
import {ActionsLoader} from '@airy-ui/kit/actions/services/actions-loader';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@Injectable({providedIn: 'root'})
@UntilDestroy()
export class RouterActionsRunnerService {
  constructor(private providers: ActionsLoader, private router: Router) {
    this.listen();
  }

  private listen(): void {
    this.router.events.pipe(untilDestroyed(this)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.providers.onRouteNavigationEnd.forEach((provider) => provider.onRouteEnd(e));
      }
      if (e instanceof NavigationStart) {
        this.providers.onRouteNavigationStart.forEach(provider => provider.onRouteStart(e));
      }
    });
  }
}
