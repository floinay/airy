import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PAGINATION_OPTIONS } from './pagination-options-token';
import { RouterModule } from '@angular/router';
import { AirIconModule } from '@airy-ui/icon';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AirIconModule,
    InlineSVGModule
  ],
  providers: [
    {
      provide: PAGINATION_OPTIONS,
      useValue: {
        previousButtonIcon: '/assets/icons/pagination-prev.svg',
        nextButtonIcon: '/assets/icons/pagination-next.svg'
      }
    }
  ]
})
export class AirPaginationModule {
}
