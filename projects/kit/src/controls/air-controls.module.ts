import {NgModule} from '@angular/core';
import {InputDirective} from './directives';
import {AirCdkModule} from '../cdk';
import {CheckboxComponent, FormFieldComponent, LabelComponent, ToggleComponent} from './components';
import {FormsModule} from '@angular/forms';


const declarations = [FormFieldComponent, LabelComponent, ToggleComponent, InputDirective, CheckboxComponent];

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
