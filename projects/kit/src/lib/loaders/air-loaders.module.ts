import {Injector, NgModule} from '@angular/core';
import {LoadDirective} from './directives';
import {LoadersStaticInjector} from './loaders-static-injector';
import {LoaderComponent, ProgressBarComponent} from './components';
import {AirIconModule} from '../icon';
import {AIR_LOADER_DEFAULT_PROVIDERS} from './air-loaders.providers';
import {AirCdkModule} from '@airy-ui/cdk';

const declarations = [LoadDirective, LoaderComponent, ProgressBarComponent];

@NgModule({
  declarations,
  exports: declarations,
  providers: AIR_LOADER_DEFAULT_PROVIDERS,
  imports: [
    AirIconModule,
    AirCdkModule
  ]
})
export class AirLoadersModule {
  constructor(injector: Injector) {
    LoadersStaticInjector.set(injector);
  }
}
