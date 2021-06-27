import {NgModule} from '@angular/core';
import {
  ActionsPortalComponent,
  ContainerComponent,
  HeaderPortalComponent,
  PageComponent,
  ScrollContainerComponent
} from './components';
import {
  ActionsContainerDirective, BreakpointsDirective,
  ContentDirective,
  EndDirective,
  FlexDirective,
  FooterDirective,
  GridItemDirective,
  HeaderContainerDirective,
  HeaderDirective,
  ImpositionContainerDirective,
  ImpositionDirective,
  LayoutDirective,
  MarginsDirective,
  PaddingsDirective,
  StartDirective,
  StretchDirective,
} from './directives';
import {PortalModule} from '@angular/cdk/portal';


const declarations = [
  HeaderContainerDirective,
  PageComponent,
  HeaderPortalComponent,
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
  MarginsDirective,
  ScrollContainerComponent,
  ImpositionContainerDirective,
  ImpositionDirective,
  ActionsPortalComponent,
  ActionsContainerDirective,
  BreakpointsDirective
];

@NgModule({
  declarations,
  imports: [
    PortalModule
  ],
  providers: [],
  exports: declarations
})
export class AirLayoutModule {
}
