import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  AutofocusDirective,
  ClearInputBeforeUploadDirective,
  HideIfEmptyDirective, MarginsDirective,
  PaddingsDirective
} from './directives';
import {CDK_MODULE_OPTIONS, CdkModuleOptions} from './options';


@NgModule({
  declarations: [HideIfEmptyDirective, ClearInputBeforeUploadDirective, AutofocusDirective, PaddingsDirective, MarginsDirective],
  imports: [],
  exports: [HideIfEmptyDirective, ClearInputBeforeUploadDirective, AutofocusDirective, PaddingsDirective, MarginsDirective]
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
