import {RouterActionsRunnerService} from '@airy-ui/kit/actions/services/runners/router-actions-runner.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ActionsRunnerService {
  constructor(routes: RouterActionsRunnerService) {
  }
}
