import {NgModule} from '@angular/core';
import {TooltipComponent} from './component';
import {TooltipDirective} from './directive';
import {OverlayModule} from '@angular/cdk/overlay';


@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  imports: [
    OverlayModule
  ],
  exports: [TooltipComponent, TooltipDirective]
})
export class AirTooltipModule {
}
