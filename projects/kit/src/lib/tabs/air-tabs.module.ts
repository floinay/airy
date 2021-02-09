import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent, TabContentComponent, TabsComponent} from './components';
import {TabHeaderDirective} from './directives';

const declarations = [TabsComponent, TabComponent, TabContentComponent, TabHeaderDirective];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule
  ]
})
export class AirTabsModule {
}
