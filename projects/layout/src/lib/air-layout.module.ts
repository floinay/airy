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
  StartDirective,
  StretchDirective,
} from './directives';
import {PortalModule} from '@angular/cdk/portal';
import {AirDirectionModule} from '@airy-ui/direction';


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
    PortalModule,
    AirDirectionModule
  ],
  providers: [],
  exports: declarations
})
export class AirLayoutModule {
}
