import {NgModule} from '@angular/core';
import {ContainerComponent, PageComponent} from './components';
import {
  ContentDirective,
  EndDirective,
  FooterDirective,
  HeaderDirective,
  LayoutDirective,
  StartDirective
} from './directives';


const declarations = [PageComponent,
  HeaderDirective,
  FooterDirective,
  EndDirective,
  StartDirective,
  LayoutDirective,
  ContentDirective,
  ContainerComponent];

@NgModule({
  declarations,
  imports: [],
  providers: [],
  exports: declarations
})
export class AirLayoutModule {
}
