import {Injectable} from '@angular/core';
import {ActionsLoader} from '@airy-ui/kit/actions/services/actions-loader';

@Injectable({providedIn: 'root'})
export class PreloadActionsRunnerService {
  constructor(private actionsLoader: ActionsLoader) {
  }

  run(): Promise<any> {
    return Promise.all(this.actionsLoader.onPreload.map(action => action.preload()));
  }
}
