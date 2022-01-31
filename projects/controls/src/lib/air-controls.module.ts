import {NgModule} from '@angular/core';
import {InputDirective, TextareaAutosizeDirective} from './directives';

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
  SelectComponent,
  ToggleComponent
} from './components';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {AIR_CONTROLS_DEFAULT_PROVIDERS} from './air-controls.providers';
import {AirCdkModule} from '@airy-ui/cdk';
import {InputAutoWidthDirective} from './directives/input-auto-width.directive';
import {SimpleAutocompletePipe} from './pipes';
import {AutocompleteDirective} from './directives/autocomplete/autocomplete.directive';
import {AirButtonModule} from '@airy-ui/button';
import {AirLayoutModule} from '@airy-ui/layout';
import {AirDirectionModule} from '@airy-ui/direction';
import {AirTypographyModule} from '@airy-ui/typography';
import {AirIconModule} from '@airy-ui/icon';
import {AirRadioButtonsModule} from './radio-buttons/air-radio-buttons.module';
import {SliderModule} from "./slider/slider.module";

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
  FileComponent,
  SelectComponent,
  OptionComponent,
  FileItemComponent,
  ImageComponent,
  InputColorComponent,
  AutocompleteDirective,
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
    AirTypographyModule,
    AirIconModule,
    AirRadioButtonsModule,
    SliderModule
  ],
  providers: AIR_CONTROLS_DEFAULT_PROVIDERS,
  exports: [declarations, SliderModule]
})
export class AirControlsModule {
}
