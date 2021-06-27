import {Injectable} from '@angular/core';
import {ActionsLoader} from '@airy-ui/kit/actions/services/actions-loader';

@Injectable({providedIn: 'root'})
export class OnAppInitActionsRunnerService {
  constructor(private actionsLoader: ActionsLoader) {
  }

  run() {
    this.actionsLoader.onAppInit.forEach(action => action.onInit());
  }
}
