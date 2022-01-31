import { NgModule } from '@angular/core';
import {
  ActionsPortalComponent,
  ContainerComponent,
  HeaderPortalComponent,
  PageComponent,
  ScrollContainerComponent
} from './components';
import {
  ActionsContainerDirective,
  BreakpointsDirective,
  ContentDirective,
  EndDirective,
  FlexDirective,
  FooterDirective,
  GridItemDirective,
  HeaderContainerDirective,
  HeaderDirective,
  ImpositionContainerDirective,
  ImpositionDirective,
  StartDirective,
  StretchDirective,
} from './directives';
import { PortalModule } from '@angular/cdk/portal';
import { AirDirectionModule } from '@airy-ui/direction';
import { AirIndentsModule } from './indents';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';


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
    AirDirectionModule,
    AirIndentsModule,
    CommonModule,
    LayoutModule
  ],
  providers: [],
  exports: [declarations, AirIndentsModule, LayoutModule]
})
export class AirLayoutModule {
}
