import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AirButtonModule} from '../../projects/button/src/lib/air-button.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AirCdkModule} from '../../projects/cdk/src/lib';
import {AirTooltipModule} from '../../projects/tooltip/src/lib/tooltip.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AirLayoutModule} from '../../projects/layout/src/lib/air-layout.module';
import {AirExpansionModule} from '../../projects/expansion/src/lib/air-expansion.module';
import {AirIconModule} from '@airy-ui/icon';
import {AirListModule} from '../../projects/list/src/lib/air-list.module';

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
    AirListModule,
    AirIconModule.forRoot({
      pathToStaticIcons: '/assets/icons',
      defaultFormat: 'svg',
      pathToDynamicIconsSprite: '/assets/sprites/sprite.svg'
    }),
    AirExpansionModule.forRoot({defaultIconName: 'expand', defaultIconSize: 's'}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
