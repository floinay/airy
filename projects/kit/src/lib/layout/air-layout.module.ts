import {NgModule} from '@angular/core';
import {ContainerComponent, PageComponent} from './components';
import {EndDirective, FooterDirective, HeaderDirective, LayoutDirective, StartDirective} from './directives';


@NgModule({
  declarations: [
    PageComponent,
    HeaderDirective,
    FooterDirective,
    EndDirective,
    StartDirective,
    LayoutDirective,
    ContainerComponent
  ],
  imports: [],
  providers: [],
  exports: [
    PageComponent,
    HeaderDirective,
    FooterDirective,
    EndDirective,
    StartDirective,
    LayoutDirective,
    ContainerComponent
  ]
})
export class AirLayoutModule {
}
