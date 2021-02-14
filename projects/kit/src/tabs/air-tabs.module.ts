import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabLinkDirective} from './directives';
import {TabsLinksComponent} from './components';

const declarations = [TabsLinksComponent, TabLinkDirective];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule
  ],
})
export class AirTabsModule {
}
