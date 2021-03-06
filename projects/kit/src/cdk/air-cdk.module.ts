import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  AutofocusDirective,
  ClearInputBeforeUploadDirective,
  HideIfEmptyDirective,
  ScrollToMeDirective
} from './directives';
import {CDK_MODULE_OPTIONS, CdkModuleOptions} from './options';
import {ReplaceVarsPipe} from './pipes';

const declarations = [
  HideIfEmptyDirective,
  ClearInputBeforeUploadDirective,
  AutofocusDirective,
  ScrollToMeDirective,
  ReplaceVarsPipe
];

@NgModule({
  declarations,
  imports: [],
  exports: declarations,
})
export class AirCdkModule {
  static forRoot(options?: CdkModuleOptions): ModuleWithProviders<AirCdkModule> {

    return {
      ngModule: AirCdkModule,
      providers: [
        {
          provide: CDK_MODULE_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
