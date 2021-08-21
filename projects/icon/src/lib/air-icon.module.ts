import {ModuleWithProviders, NgModule} from '@angular/core';
import {IconComponent} from './components';
import {IconModuleOptions} from './options';
import {ICON_MODULE_OPTIONS} from './options';
import {DynamicIconComponent} from './components';


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
