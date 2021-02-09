import {NgModule} from '@angular/core';
import {ContainerComponent, PageComponent} from './components';
import {
  ContentDirective,
  EndDirective, FlexDirective,
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
  ContainerComponent,
  FlexDirective
];

@NgModule({
  declarations,
  imports: [],
  providers: [],
  exports: declarations
})
export class AirLayoutModule {
}
