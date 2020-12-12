import { ModuleWithProviders, NgModule } from '@angular/core';
import { HideIfEmptyDirective } from './directives/hide-if-empty.directive';
import { ClearInputBeforeUploadDirective } from './directives/clear-input-before-upload.directive';
import { IndentsDirective } from './directives/indents/indents.directive';
import { CdkModuleOptions } from './options/cdk-module.options';
import { defaultOptions } from './options/default-options';
import { CDK_MODULE_OPTIONS } from './options/cdk-module-options.provider';
import { AutofocusDirective } from './directives/autofocus.directive';


@NgModule({
  declarations: [HideIfEmptyDirective, ClearInputBeforeUploadDirective, IndentsDirective, AutofocusDirective],
  imports: [],
  exports: [HideIfEmptyDirective, ClearInputBeforeUploadDirective, IndentsDirective, AutofocusDirective]
})
export class AirCdkModule {
  static forRoot(options?: CdkModuleOptions): ModuleWithProviders<AirCdkModule> {
    if (!options) {
      options = defaultOptions;
    }

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
