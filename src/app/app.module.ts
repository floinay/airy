import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { GridComponent } from './pages/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstTabComponent } from './pages/tabs/pages/first-tab/first-tab.component';
import { SecondTabComponent } from './pages/tabs/pages/second-tab/second-tab.component';
import { ThirdTabComponent } from './pages/tabs/pages/third-tab/third-tab.component';
import { ControlsComponent } from './pages/controls/controls.component';
import { HeaderComponent } from './components/header/header.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { LoadersComponent } from './pages/loaders/loaders.component';
import { EditorComponent } from './pages/editor/editor.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { PopoverComponent } from './pages/popover/popover.component';
import { AirButtonModule } from '@airy-ui/button';
import { AirDirectionModule } from '../../projects/direction/src/lib';
import { AirLayoutModule } from '../../projects/layout/src/lib/air-layout.module';
import { AirElementsPositionModule } from '../../projects/layout/src/lib/elements-position/air-elements-position.module';
import { AirLoadersModule } from '../../projects/kit/src/lib/loaders';
import { AirPopoverModule } from '../../projects/kit/src/lib/popover';
import {
  AirExpansionModule,
  AirIconModule,
  AirListModule,
  AirNavModule,
  AirTabsModule,
  AirTooltipModule
} from '../../projects/kit/src/lib';
import { AirControlsModule } from '../../projects/controls/src/lib/air-controls.module';
import { AirTypographyModule } from '../../projects/typography/src/lib';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AirPaginationModule } from '../../projects/pagination/src/lib/pagination.module';
import { TableComponent } from './pages/table/table.component';
import { AirTableModule } from '../../projects/table/src/lib/table.module';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonsComponent,
    TabsComponent,
    GridComponent,
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent,
    ControlsComponent,
    HeaderComponent,
    TypographyComponent,
    LoadersComponent,
    EditorComponent,
    TooltipComponent,
    PopoverComponent,
    PaginationComponent,
    TableComponent,
  ],
  imports: [
    AirDirectionModule,
    AirLoadersModule,
    AirPopoverModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
    },
      {
        path: 'tooltips',
        component: TooltipComponent,
      },
      {
        path: 'loaders',
        component: LoadersComponent
      }, {
        path: 'editor',
        component: EditorComponent
      }, {
        path: 'popover',
        component: PopoverComponent
      },
      {
        path: 'tabs',
        component: TabsComponent,
        children: [
          {
            path: 'first',
            component: FirstTabComponent
          }, {
            path: 'second',
            component: SecondTabComponent
          }, {
            path: 'third',
            component: ThirdTabComponent
          }
        ]
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'controls',
        component: ControlsComponent
      }, {
        path: 'tp',
        component: TypographyComponent
      }, {
        path: 'pagination',
        component: PaginationComponent,
      }, {
        path: 'pagination/:page',
        component: PaginationComponent,
      }, {
        path: 'table',
        component: TableComponent,
      },
    ]),
    AirTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AirControlsModule,
    AirTooltipModule,
    AirNavModule,
    AirLayoutModule,
    AirTypographyModule,
    AirButtonModule,
    AirPaginationModule,
    AirListModule,
    AirTableModule,
    AirIconModule.forRoot({
      pathToSprites: '/assets/sprites/',
      defaultSprite: 'sprite',
      pathToStaticIcons: 'assets/icons',
      defaultFormat: 'svg'
    }),
    AirExpansionModule.forRoot({defaultIconName: 'expand', defaultIconSize: 's'}),
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AirElementsPositionModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
