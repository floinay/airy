import {NgModule} from '@angular/core';
import {InputDirective, TextareaAutosizeDirective} from './directives';
import {AirCdkModule} from '@airy-ui/cdk';
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
import {AirButtonModule} from '@airy-ui/button';
import {AIR_CONTROLS_DEFAULT_PROVIDERS} from './air-controls.providers';
import {AirLayoutModule} from '@airy-ui/layout';
import {AutocompleteDirective} from './directives/autocomplete/autocomplete.directive';
import {InputAutoWidthDirective} from './directives/input-auto-width.directive';
import {SimpleAutocompletePipe} from './pipes';
import {AirDirectionModule} from '@airy-ui/direction';


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
    AirDirectionModule
  ],
  providers: AIR_CONTROLS_DEFAULT_PROVIDERS,
  exports: declarations
})
export class AirControlsModule {
}
