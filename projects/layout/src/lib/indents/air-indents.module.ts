import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarginsDirective} from './margins.directive';
import {PaddingsDirective} from './paddings.directive';


@NgModule({
  declarations: [MarginsDirective, PaddingsDirective],
  exports: [MarginsDirective, PaddingsDirective],
  imports: [
    CommonModule
  ]
})
export class AirIndentsModule {
}
