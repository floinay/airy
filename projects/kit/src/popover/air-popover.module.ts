import {NgModule} from '@angular/core';
import {PopoverComponent} from './components';
import {PopoverDirective} from './directives';


const declarations = [PopoverComponent, PopoverDirective];

@NgModule({
  declarations,
  exports: declarations,
})
export class AirPopoverModule {

}
