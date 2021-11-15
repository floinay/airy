import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLikeCellDirective, listenResize } from './table-like-cell.directive';
import { WINDOW } from '@ng-web-apis/common';


@NgModule({
  declarations: [
    TableLikeCellDirective
  ],
  exports: [TableLikeCellDirective],
  imports: [
    CommonModule
  ]
})
export class AirTableLikeCellModule {
  constructor(@Inject(WINDOW) window: Window) {
    listenResize(window);
  }
}
