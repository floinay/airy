import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaptionDirective, TitleDirective, TextDirective} from './directives';


@NgModule({
  declarations: [CaptionDirective, TitleDirective, TextDirective],
  exports: [TitleDirective, CaptionDirective, TextDirective],
  imports: [
    CommonModule
  ]
})
export class AirTypographyModule {
}
