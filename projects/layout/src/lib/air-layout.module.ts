import {ModuleWithProviders, NgModule} from '@angular/core';
import {PageComponent} from './components/page/page.component';
import {LayoutModuleOptions} from './options/layout-module.options';
import {LAYOUT_MODULE_OPTIONS} from './options/layout-module.options.provider';
import {OptionsService} from './services/options.service';
import {HeaderDirective} from './directives/header/header.directive';
import {FooterDirective} from './directives/footer/footer.directive';
import {EndDirective} from './directives/end/end.directive';
import {StartDirective} from './directives/start/start.directive';
import {LayoutDirective} from './directives/layout/layout.directive';
import {FlexDirective} from './directives/flex/flex.directive';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    PageComponent,
    HeaderDirective,
    FooterDirective,
    EndDirective,
    StartDirective,
    LayoutDirective,
    FlexDirective,
    ContainerComponent
  ],
  imports: [],
  providers: [OptionsService],
  exports: [
    PageComponent,
    HeaderDirective,
    FooterDirective,
    EndDirective,
    StartDirective,
    LayoutDirective,
    FlexDirective,
    ContainerComponent
  ]
})
export class AirLayoutModule {
  static forRoot(options?: LayoutModuleOptions): ModuleWithProviders<AirLayoutModule> {
    if (!options) {
      options = {};
    }

    return {
      ngModule: AirLayoutModule,
      providers: [
        {
          provide: LAYOUT_MODULE_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
