import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PAGINATION_OPTIONS } from './pagination-options-token';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: PAGINATION_OPTIONS,
      useValue: {
        arrowStartIcon: 'arrow-start',
        arrowEndIcon: 'arrow-end'
      }
    }
  ]
})
export class AirPaginationModule {
}
