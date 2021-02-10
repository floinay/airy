import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent, TabContentComponent, TabsComponent, TabsLinksComponent} from './components';
import {TabHeaderDirective} from './directives';

const declarations = [TabsComponent, TabComponent, TabContentComponent, TabHeaderDirective, TabsLinksComponent];

@NgModule({
  declarations,
  exports: [TabsLinksComponent],
  imports: [
    CommonModule
  ],
})
export class AirTabsModule {
}
