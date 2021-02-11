import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent, TabContentComponent, TabsComponent, TabsLinksComponent} from './components';

const declarations = [TabsComponent, TabsLinksComponent, TabComponent, TabContentComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule
  ],
})
export class AirTabsModule {
}
