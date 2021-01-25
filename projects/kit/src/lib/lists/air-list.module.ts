import {NgModule} from '@angular/core';
import {ListComponent, ListItemComponent} from './components';
import {DeliverComponent} from './components/deliver/deliver.component';


@NgModule({
  declarations: [ListItemComponent, ListComponent, DeliverComponent],
  imports: [],
  exports: [ListComponent, ListItemComponent, DeliverComponent]
})
export class AirListModule {
}
