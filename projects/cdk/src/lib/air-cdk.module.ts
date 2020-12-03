import { NgModule } from '@angular/core';
import { HideIfEmptyDirective } from './directives/hide-if-empty.directive';
import { ClearInputBeforeUploadDirective } from './directives/clear-input-before-upload.directive';


@NgModule({
  declarations: [HideIfEmptyDirective, ClearInputBeforeUploadDirective],
  imports: [],
  exports: [HideIfEmptyDirective, ClearInputBeforeUploadDirective]
})
export class AirCdkModule {
}
