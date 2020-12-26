import { NgModule } from '@angular/core';
import { TooltipComponent } from './components/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  imports: [
    OverlayModule
  ],
  exports: [TooltipComponent, TooltipDirective]
})
export class AirTooltipModule { }
