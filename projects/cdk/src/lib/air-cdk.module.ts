import { NgModule } from '@angular/core';
import { HideIfEmptyDirective } from './directives/hide-if-empty.directive';



@NgModule({
  declarations: [HideIfEmptyDirective],
  imports: [
  ],
  exports: [HideIfEmptyDirective]
})
export class AirCdkModule { }
