import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent} from "./slider.component";
import {AirLayoutModule} from "@airy-ui/layout";


@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    CommonModule,
    AirLayoutModule
  ]
})
export class SliderModule {
}
