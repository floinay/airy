import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AirButtonModule} from '../../projects/button/src/lib/air-button.module';
import {AirIconModule} from '../../projects/icon/src/lib/air-icon.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AirCdkModule} from '../../projects/cdk/src/public-api';
import {AirTooltipModule} from '../../projects/tooltip/src/lib/tooltip.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AirLayoutModule} from '../../projects/layout/src/lib/air-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AirTooltipModule,
    AirLayoutModule.forRoot(),
    AirCdkModule.forRoot(),
    AirButtonModule,
    AirIconModule.forRoot({
      pathToStaticIcons: '/assets/icons',
      defaultFormat: 'svg',
      pathToDynamicIconsSprite: '/assets/sprites/sprite.svg'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
