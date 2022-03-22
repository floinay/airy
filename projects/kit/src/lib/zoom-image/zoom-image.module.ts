import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {ZoomImageComponent} from './component';
import {ZoomImageDirective} from './directive';
import {ZoomImageService} from './services';
import {AirCdkModule} from '@airy-ui/cdk';
import {AirIconModule} from '@airy-ui/icon';
import {AirLayoutModule} from '@airy-ui/layout';
import {AirButtonModule} from '@airy-ui/button';

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
