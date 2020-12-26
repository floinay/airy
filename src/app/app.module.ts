import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirButtonModule } from '../../projects/button/src/lib/air-button.module';
import { AirIconModule } from '../../projects/icon/src/lib/air-icon.module';
import { AirControlsModule } from '../../projects/controls/src/lib/air-controls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AirCdkModule } from '../../projects/cdk/src/public-api';
import { AirTooltipModule } from '../../projects/tooltip/src/lib/tooltip.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AirTooltipModule,
    AirCdkModule.forRoot({
      margins: {sm: 8, default: 16, md: 25, lg: 28},
      paddings: {sm: 8, default: 16, md: 25, lg: 28}
    }),
    AirButtonModule,
    AirControlsModule,
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
