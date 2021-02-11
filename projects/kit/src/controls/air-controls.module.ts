import { NgModule } from '@angular/core';
import { FormFieldComponent } from './components';
import { LabelComponent } from './components';
import { ToggleComponent } from './components';
import { InputDirective } from './directives';
import { AirCdkModule } from '../cdk';



@NgModule({
  declarations: [FormFieldComponent, LabelComponent, ToggleComponent, InputDirective],
  imports: [
    AirCdkModule
  ],
  exports: [FormFieldComponent, LabelComponent, ToggleComponent, InputDirective]
})
export class AirControlsModule { }
