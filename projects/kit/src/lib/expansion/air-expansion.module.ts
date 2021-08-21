import {ModuleWithProviders, NgModule} from '@angular/core';
import {ExpansionComponent, ExpansionHeaderComponent} from './components';
import {EXPANSION_MODULE_OPTIONS, ExpansionModuleOptions} from './options';
import {CommonModule} from '@angular/common';
import {AirIconModule} from '../../../../icon/src/lib';


@NgModule({
  declarations: [ExpansionComponent, ExpansionHeaderComponent],
  imports: [AirIconModule, CommonModule],
  exports: [ExpansionComponent, ExpansionHeaderComponent]
})
export class AirExpansionModule {
  static forRoot(options: ExpansionModuleOptions): ModuleWithProviders<AirExpansionModule> {
    return {
      ngModule: AirExpansionModule,
      providers: [
        {
          provide: EXPANSION_MODULE_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
