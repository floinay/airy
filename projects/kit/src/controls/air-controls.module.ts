import {NgModule} from '@angular/core';
import {InputDirective} from './directives';
import {AirCdkModule} from '../cdk';
import {
  CheckboxComponent,
  FileButtonComponent,
  FileComponent,
  FormFieldComponent,
  LabelComponent,
  OptionComponent,
  RadioButtonComponent,
  RadioGroupComponent,
  SelectComponent,
  ToggleComponent
} from './components';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {AirButtonModule} from '../button';
import {AIR_CONTROLS_DEFAULT_PROVIDERS} from './air-controls.providers';
import {AirLayoutModule} from '../layout';
import {AirTypographyModule} from '../typography/air-typography.module';


const declarations = [
  FormFieldComponent,
  LabelComponent,
  ToggleComponent,
  InputDirective,
  CheckboxComponent,
  RadioGroupComponent,
  FileComponent,
  RadioButtonComponent,
  SelectComponent,
  OptionComponent,
  FileButtonComponent
];

@NgModule({
  declarations,
  imports: [
    AirCdkModule,
    FormsModule,
    CommonModule,
    OverlayModule,
    AirButtonModule,
    AirLayoutModule,
    AirTypographyModule
  ],
  providers: AIR_CONTROLS_DEFAULT_PROVIDERS,
  exports: declarations,
})
export class AirControlsModule {
}
