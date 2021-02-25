import {Injector, NgModule} from '@angular/core';
import {LoadDirective} from './directives';
import {LoadersStaticInjector} from './loaders-static-injector';
import {LoaderComponent} from './components';
import {AirIconModule} from '../icon';

const declarations = [LoadDirective, LoaderComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    AirIconModule
  ]
})
export class AirLoadersModule {
  constructor(injector: Injector) {
    LoadersStaticInjector.set(injector);
  }
}
