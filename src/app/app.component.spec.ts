import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';
import {TabsComponent} from './pages/tabs/tabs.component';
import {GridComponent} from './pages/grid/grid.component';
import {FirstTabComponent} from './pages/tabs/pages/first-tab/first-tab.component';
import {SecondTabComponent} from './pages/tabs/pages/second-tab/second-tab.component';
import {ThirdTabComponent} from './pages/tabs/pages/third-tab/third-tab.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AirTypographyModule} from '../../projects/typography/src/lib';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {AirDirectionModule} from '@airy-ui/direction';
import {AirTabsModule} from '@airy-ui/tabs';
import {AirExpansionModule, AirListModule, AirNavModule, AirTooltipModule} from '../../projects/kit/src/lib';
import {AirControlsModule} from '@airy-ui/controls';
import {AirLayoutModule} from '@airy-ui/layout';
import {AirCdkModule} from '@airy-ui/cdk';
import {AirButtonModule} from '@airy-ui/button';
import {AirIconModule} from '@airy-ui/icon';
import {AirModalModule} from '../../projects/modal/src/lib/air-modal.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ButtonsComponent,
        TabsComponent,
        GridComponent,
        FirstTabComponent,
        SecondTabComponent,
        ThirdTabComponent,
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
          }]),
        AirTabsModule,
        BrowserModule,
        BrowserAnimationsModule,
        AirControlsModule,
        AirTooltipModule,
        AirNavModule,
        AirLayoutModule,
        AirTypographyModule,
        AirCdkModule, //.forRoot(),
        AirButtonModule,
        AirListModule,
        AirIconModule.forRoot({
          pathToStaticIcons: '/assets/icons',
          defaultFormat: 'svg',
          pathToSprites: '/assets/sprites',
          defaultSprite: 'sprite.svg'
        }),
        AirExpansionModule.forRoot({defaultIconName: 'expand', defaultIconSize: 's'}),
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
        AirModalModule
      ],
      providers: [],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
