import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirButtonModule } from '../../projects/button/src/lib/air-button.module';
import { AirIconModule } from '../../projects/icon/src/lib/air-icon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AirButtonModule,
    AirIconModule.forRoot({
      pathToStaticIcons: '/assets/icons',
      defaultFormat: 'svg',
      pathToDynamicIconsSprite: '/assets/sprites/sprite.svg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
