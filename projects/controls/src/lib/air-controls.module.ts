import { NgModule } from '@angular/core';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { LabelComponent } from './components/label/label-component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { InputDirective } from './directives/input.directive';
import { AirCdkModule } from '@airy-ui/cdk';



@NgModule({
  declarations: [FormFieldComponent, LabelComponent, ToggleComponent, InputDirective],
  imports: [
    AirCdkModule
  ],
  exports: [FormFieldComponent, LabelComponent, ToggleComponent, InputDirective]
})
export class AirControlsModule { }
