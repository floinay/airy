import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AirExpansionModule,
  AirIconModule,
  AirListModule,
  AirNavModule,
  AirLayoutModule,
  AirButtonModule,
  AirTooltipModule,
  AirControlsModule,
  AirCdkModule,
  AirDirectionModule,
  AirTabsModule
} from '../../projects/kit/src';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AirTypographyModule} from '../../projects/kit/src/typography/air-typography.module';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';
import {TabsComponent} from './pages/tabs/tabs.component';
import {GridComponent} from './pages/grid/grid.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';
import {FirstTabComponent} from './pages/tabs/pages/first-tab/first-tab.component';
import {SecondTabComponent} from './pages/tabs/pages/second-tab/second-tab.component';
import {ThirdTabComponent} from './pages/tabs/pages/third-tab/third-tab.component';
import {ControlsComponent} from './pages/controls/controls.component';
import { HeaderComponent } from './components/header/header.component';


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
  ],
  imports: [
    AirDirectionModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
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
      }
    ]),
    AirTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AirControlsModule,
    AirTooltipModule,
    AirNavModule,
    AirLayoutModule,
    AirTypographyModule,
    AirCdkModule.forRoot(),
    AirButtonModule,
    AirListModule,
    AirIconModule.forRoot({
      pathToStaticIcons: '/assets/icons',
      defaultFormat: 'svg',
      pathToDynamicIconsSprite: '/assets/sprites/sprite.svg'
    }),
    AirExpansionModule.forRoot({defaultIconName: 'expand', defaultIconSize: 's'}),
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
