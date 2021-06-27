import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  AutofocusDirective,
  ClearInputBeforeUploadDirective,
  HideIfEmptyDirective,
  OverlayDirective,
  ScrollDirective,
  ScrollToMeDirective,
  ThemeDirective
} from './directives';
import {MergePipe, ReplaceStringPipe, ReplaceVarsPipe} from './pipes';

const declarations = [
  ReplaceStringPipe,
  HideIfEmptyDirective,
  ClearInputBeforeUploadDirective,
  AutofocusDirective,
  ScrollToMeDirective,
  ReplaceVarsPipe,
  MergePipe,
  ScrollDirective,
  OverlayDirective,
  ThemeDirective
];

@NgModule({
  declarations,
  imports: [],
  exports: declarations
})
export class AirCdkModule {
}
