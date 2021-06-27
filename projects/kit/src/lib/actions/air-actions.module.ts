import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionsRunnerService} from '@airy-ui/kit/actions/services/actions-runner.service';
import {OnAppInitActionsRunnerService} from '@airy-ui/kit/actions/services/runners/on-app-init-actions-runner.service';
import {PreloadActionsRunnerService} from '@airy-ui/kit/actions/services/runners/preload-actions-runner.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (onInit: OnAppInitActionsRunnerService, preload: PreloadActionsRunnerService) => {
        return () => {
          const preloads = preload.run();
          preloads.then(() => onInit.run());
          return preloads;
        };
      },
      deps: [OnAppInitActionsRunnerService, PreloadActionsRunnerService],
      multi: true
    }

  ]
})
export class AirActionsModule {
  constructor(runner: ActionsRunnerService) {
  }
}
