import {NgModule} from '@angular/core';
import {InputDirective, TextareaAutosizeDirective} from './directives';
import {AirCdkModule} from '../../../../cdk/src/lib';
import {
  AutocompleteComponent,
  CheckboxComponent,
  FileComponent,
  FileItemComponent,
  FormFieldComponent,
  ImageComponent,
  InputColorComponent,
  LabelComponent,
  OptionComponent,
  RadioButtonComponent,
  RadioGroupComponent,
  SelectComponent,
  SliderComponent,
  ToggleComponent
} from './components';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {AirButtonModule} from '../button';
import {AIR_CONTROLS_DEFAULT_PROVIDERS} from './air-controls.providers';
import {AirLayoutModule} from '../layout';
import {AirTypographyModule} from '../typography/air-typography.module';
import {AirDirectionModule} from '../../../../direction/src/lib';
import {AutocompleteDirective} from '@airy-ui/controls/directives/autocomplete/autocomplete.directive';
import {SimpleAutocompletePipe} from '@airy-ui/controls/pipes';
import {InputAutoWidthDirective} from '@airy-ui/controls/directives/input-auto-width.directive';


const declarations = [
  AutocompleteComponent,
  InputAutoWidthDirective,
  SimpleAutocompletePipe,
  FormFieldComponent,
  LabelComponent,
  ToggleComponent,
  TextareaAutosizeDirective,
  InputDirective,
  CheckboxComponent,
  RadioGroupComponent,
  FileComponent,
  RadioButtonComponent,
  SelectComponent,
  OptionComponent,
  FileItemComponent,
  ImageComponent,
  InputColorComponent,
  SliderComponent,
  AutocompleteDirective,
  SliderComponent
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
    AirDirectionModule,
    AirTypographyModule
  ],
  providers: AIR_CONTROLS_DEFAULT_PROVIDERS,
  exports: declarations
})
export class AirControlsModule {
}
