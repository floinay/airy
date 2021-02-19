import {NgModule} from '@angular/core';
import {InputDirective} from './directives';
import {AirCdkModule} from '../cdk';
import {
  CheckboxComponent,
  FormFieldComponent,
  LabelComponent, RadioButtonComponent,
  RadioGroupComponent,
  ToggleComponent
} from './components';
import {FormsModule} from '@angular/forms';


const declarations = [
  FormFieldComponent,
  LabelComponent, ToggleComponent,
  InputDirective,
  CheckboxComponent,
  RadioGroupComponent,
  RadioButtonComponent
];

@NgModule({
  declarations,
  imports: [
    AirCdkModule,
    FormsModule
  ],
  exports: declarations
})
export class AirControlsModule {
}
