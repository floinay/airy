import {NgModule} from '@angular/core';
import {ConfirmComponent, PopoverComponent} from './components';
import {PopoverDirective} from './directives';


const declarations = [PopoverComponent, PopoverDirective, ConfirmComponent];

@NgModule({
  declarations,
  exports: declarations
})
export class AirPopoverModule {

}
