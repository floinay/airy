import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [],
  exports: [ListComponent, ListItemComponent]
})
export class AirListsModule {
}
