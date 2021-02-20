import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleDirective, TextDirective, ColorDirective} from './directives';

const declarations = [TitleDirective, TextDirective, ColorDirective];


@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule
  ]
})
export class AirTypographyModule {
}
