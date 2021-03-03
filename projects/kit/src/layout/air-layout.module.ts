import {NgModule} from '@angular/core';
import {ContainerComponent, PageComponent} from './components';
import {
  ContentDirective,
  EndDirective,
  FlexDirective,
  FooterDirective,
  GridItemDirective,
  HeaderDirective,
  LayoutDirective,
  MarginsDirective,
  PaddingsDirective,
  StartDirective,
  StretchDirective
} from './directives';


const declarations = [
  PageComponent,
  StretchDirective,
  HeaderDirective,
  FooterDirective,
  EndDirective,
  StartDirective,
  GridItemDirective,
  LayoutDirective,
  ContentDirective,
  ContainerComponent,
  FlexDirective,
  PaddingsDirective,
  MarginsDirective
];

@NgModule({
  declarations,
  imports: [],
  providers: [],
  exports: declarations,
})
export class AirLayoutModule {
}
