import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef,
  CdkNoDataRow,
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

/**
 * Header row definition for the air-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
@Directive({
  selector: '[airHeaderRowDef]',
  providers: [{provide: CdkHeaderRowDef, useExisting: HeaderRowDefDirective}],
  inputs: ['columns: airHeaderRowDef', 'sticky: airHeaderRowDefSticky'],
})
export class HeaderRowDefDirective extends CdkHeaderRowDef {
}

/**
 * Footer row definition for the air-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
@Directive({
  selector: '[airFooterRowDef]',
  providers: [{provide: CdkFooterRowDef, useExisting: FooterRowDefDirective}],
  inputs: ['columns: airFooterRowDef', 'sticky: airFooterRowDefSticky'],
})
export class FooterRowDefDirective extends CdkFooterRowDef {
}

/**
 * Data row definition for the air-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
@Directive({
  selector: '[airRowDef]',
  providers: [{provide: CdkRowDef, useExisting: RowDefDirective}],
  inputs: ['columns: airRowDefColumns', 'when: airRowDefWhen'],
})
export class RowDefDirective<T> extends CdkRowDef<T> {
}

/** Header template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'air-header-row, tr[air-header-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'air-header-row',
    'role': 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'airHeaderRow',
  providers: [{provide: CdkHeaderRow, useExisting: HeaderRowDirective}],
})
export class HeaderRowDirective extends CdkHeaderRow {
}

/** Footer template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'air-footer-row, tr[air-footer-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'air-footer-row',
    'role': 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'airFooterRow',
  providers: [{provide: CdkFooterRow, useExisting: FooterRowDirective}],
})
export class FooterRowDirective extends CdkFooterRow {
}

/** Data row template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'air-row, tr[air-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'air-row',
    'role': 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'airRow',
  providers: [{provide: CdkRow, useExisting: RowDirective}],
})
export class RowDirective extends CdkRow {
}

/** Row that can be used to display a message when no data is shown in the table. */
@Directive({
  selector: 'ng-template[airNoDataRow]',
  providers: [{provide: CdkNoDataRow, useExisting: NoDataRowDirective}],
})
export class NoDataRowDirective extends CdkNoDataRow {
}
