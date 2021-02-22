import {NgModule} from '@angular/core';
import {InputDirective} from './directives';
import {AirCdkModule} from '../cdk';
import {
  CheckboxComponent,
  FormFieldComponent,
  LabelComponent, OptionComponent, RadioButtonComponent,
  RadioGroupComponent, SelectComponent,
  ToggleComponent
} from './components';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';


const declarations = [
  FormFieldComponent,
  LabelComponent,
  ToggleComponent,
  InputDirective,
  CheckboxComponent,
  RadioGroupComponent,
  RadioButtonComponent,
  SelectComponent,
  OptionComponent
];

@NgModule({
  declarations,
    imports: [
        AirCdkModule,
        FormsModule,
        CommonModule,
        OverlayModule
    ],
  exports: declarations
})
export class AirControlsModule {
}
