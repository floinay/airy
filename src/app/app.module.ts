import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirButtonModule } from '../../projects/button/src/lib/air-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AirButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
