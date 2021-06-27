import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {AirListModule} from '../lists';
import {AirCdkModule} from '../../../../cdk/src/lib';


@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [
    CommonModule,
    AirListModule,
    AirCdkModule
  ]
})
export class AirNavModule {
}
