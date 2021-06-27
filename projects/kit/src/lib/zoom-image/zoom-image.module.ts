import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {ZoomImageComponent} from './component';
import {ZoomImageDirective} from './directive';
import {ZoomImageService} from './services';
import {
  AirButtonModule,
  AirCdkModule,
  AirIconModule,
  AirLayoutModule
} from '@airy-ui/kit';

const declarations = [ZoomImageComponent, ZoomImageDirective];

@NgModule({
  declarations,
  imports: [
    OverlayModule,
    AirCdkModule,
    AirLayoutModule,
    AirButtonModule,
    AirIconModule
  ],
  exports: declarations,
  providers: [ZoomImageService]
})
export class AirZoomImageModule {
}
