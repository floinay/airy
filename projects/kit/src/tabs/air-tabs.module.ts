import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent, TabContentComponent, TabsComponent, TabsLinksComponent} from './components';
import {TabHeaderDirective} from './directives';

const declarations = [TabsComponent, TabsLinksComponent, TabComponent, TabContentComponent, TabHeaderDirective];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule
  ],
})
export class AirTabsModule {
}
