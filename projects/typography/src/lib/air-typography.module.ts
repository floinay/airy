import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleDirective, TextDirective, ColorDirective, TextDirectionDirective} from './directives';

const declarations = [TitleDirective, TextDirective, ColorDirective, TextDirectionDirective];


@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule
  ]
})
export class AirTypographyModule {
}
