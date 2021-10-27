import { NgModule } from '@angular/core';
import { RecycleRowsDirective, TableComponent } from './table.component';
import {
  CellDirective,
  CellDefDirective,
  ColumnDefDirective,
  FooterCellDefDirective,
  HeaderCellDirective,
  HeaderCellDefDirective, FooterCellDirective
} from './cell';
import {
  HeaderRowDefDirective,
  FooterRowDefDirective,
  RowDefDirective,
  HeaderRowDirective,
  RowDirective,
  FooterRowDirective, NoDataRowDirective
} from './row';
import { TextColumnComponent } from './text-column';
import { BidiModule } from '@angular/cdk/bidi';
import { CdkTableModule } from '@angular/cdk/table';


const declarations = [
  TableComponent,
  RecycleRowsDirective,
  HeaderCellDefDirective,
  HeaderRowDefDirective,
  ColumnDefDirective,
  CellDefDirective,
  RowDefDirective,
  FooterCellDefDirective,
  FooterRowDefDirective,
  HeaderCellDirective,
  CellDirective,
  FooterCellDirective,
  HeaderRowDirective,
  RowDirective,
  FooterRowDirective,
  NoDataRowDirective,
  TextColumnComponent
];


@NgModule({
  declarations,
  imports: [BidiModule, CdkTableModule],
  exports: [BidiModule, declarations]
})
export class AirTableModule {
}
