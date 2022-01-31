import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDirective } from './layout.directive';



@NgModule({
  declarations: [LayoutDirective],
  exports: [LayoutDirective],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
