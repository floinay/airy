import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';


@NgModule({
  declarations: [RadioButtonComponent, RadioGroupComponent],
  exports: [RadioButtonComponent, RadioGroupComponent],
  imports: [
    CommonModule
  ]
})
export class AirRadioButtonsModule {
}
