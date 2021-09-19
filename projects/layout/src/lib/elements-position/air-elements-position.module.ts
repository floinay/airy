import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstOnLineDirective} from './first-on-line.directive';
import {LastOnLineDirective} from './last-on-line.directive';


@NgModule({
  declarations: [
    FirstOnLineDirective,
    LastOnLineDirective
  ],
  exports: [FirstOnLineDirective, LastOnLineDirective],
  imports: [
    CommonModule
  ]
})
export class AirElementsPositionModule {
}
