import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirButtonModule } from '../../projects/button/src/lib/air-button.module';
import { AirIconModule } from '../../projects/icon/src/lib/air-icon.module';
import { AirControlsModule } from '../../projects/controls/src/lib/air-controls.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
