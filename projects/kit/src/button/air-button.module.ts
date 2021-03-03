import {NgModule} from '@angular/core';
import {ButtonComponent} from './button.component';
import {ButtonsComponent} from './buttons/buttons.component';


@NgModule({
  declarations: [ButtonComponent, ButtonsComponent],
  imports: [],
  exports: [ButtonComponent, ButtonsComponent]
})
export class AirButtonModule {
}
