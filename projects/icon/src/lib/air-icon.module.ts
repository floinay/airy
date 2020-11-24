import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IconComponent } from './components/icon/icon.component';
import { IconModuleOptions } from './options/icon-module.options';
import { ICON_MODULE_OPTIONS } from './options/icon-module-options.token';
import { DynamicIconComponent } from './components/dynamic-icon/dynamic-icon.component';


@NgModule({
  declarations: [IconComponent, DynamicIconComponent],
  imports: [],
  exports: [IconComponent, DynamicIconComponent]
})
export class AirIconModule {
  static forRoot(options: IconModuleOptions): ModuleWithProviders<AirIconModule> {
    return {
      ngModule: AirIconModule,
      providers: [
        {
          provide: ICON_MODULE_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
