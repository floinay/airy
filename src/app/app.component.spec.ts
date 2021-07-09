import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';
import {TabsComponent} from './pages/tabs/tabs.component';
import {GridComponent} from './pages/grid/grid.component';
import {FirstTabComponent} from './pages/tabs/pages/first-tab/first-tab.component';
import {SecondTabComponent} from './pages/tabs/pages/second-tab/second-tab.component';
import {ThirdTabComponent} from './pages/tabs/pages/third-tab/third-tab.component';
import {
  AirButtonModule,
  AirCdkModule,
  AirControlsModule,
  AirDirectionModule, AirExpansionModule, AirIconModule, AirLayoutModule, AirListModule,
  AirNavModule,
  AirTabsModule,
  AirTooltipModule
} from '../../projects/kit/src';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AirTypographyModule} from '../../projects/kit/src/typography/air-typography.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';

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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
