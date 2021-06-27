import {Action, AIR_ACTIONS} from '@airy-ui/kit/actions';
import {Provider} from '@angular/core';


export const airActions = (actions: Action []): Provider[] => {
  return actions.map<Provider>(action => ({provide: AIR_ACTIONS, useClass: action, multi: true}));
}
