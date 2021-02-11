import {NgModule} from '@angular/core';
import {ListComponent, ListItemComponent} from './components';
import {DelimiterComponent} from './components';


@NgModule({
  declarations: [ListItemComponent, ListComponent, DelimiterComponent],
  imports: [],
  exports: [ListComponent, ListItemComponent, DelimiterComponent]
})
export class AirListModule {
}
