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
  AirCdkModule, AirDirectionModule, AirTabsModule
} from '../../projects/kit/src/lib';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AirTypographyModule} from '../../projects/kit/src/lib/typography/air-typography.module';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonsComponent,
  ],
  imports: [
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
    }, {
      path: 'buttons',
      component: ButtonsComponent
    }]),
    AirTabsModule,
    AirDirectionModule,
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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
