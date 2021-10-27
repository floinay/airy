import { Directive, Input } from '@angular/core';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
} from '@angular/cdk/table';

/**
 * Cell definition for the air-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
@Directive({
  selector: '[airCellDef]',
  providers: [{provide: CdkCellDef, useExisting: CellDefDirective}],
})
export class CellDefDirective extends CdkCellDef {
}

/**
 * Header cell definition for the air-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
@Directive({
  selector: '[airHeaderCellDef]',
  providers: [{provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective}],
})
export class HeaderCellDefDirective extends CdkHeaderCellDef {
}

/**
 * Footer cell definition for the air-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
@Directive({
  selector: '[airFooterCellDef]',
  providers: [{provide: CdkFooterCellDef, useExisting: FooterCellDefDirective}],
})
export class FooterCellDefDirective extends CdkFooterCellDef {
}

/**
 * Column definition for the air-table.
 * Defines a set of cells available for a table column.
 */
@Directive({
  selector: '[airColumnDef]',
  inputs: ['sticky'],
  providers: [
    {provide: CdkColumnDef, useExisting: ColumnDefDirective},
    {provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: ColumnDefDirective},
  ],
})
export class ColumnDefDirective extends CdkColumnDef {
  /** Unique name for this column. */
  @Input('airColumnDef')
  override get name(): string {
    return this._name;
  }

  override set name(name: string) {
    this._setNameInput(name);
  }

  /**
   * Add "air-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "air-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  protected override _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName!.push(`air-column-${this.cssClassFriendlyName}`);
  }
}

/** Header cell template container that adds the right classes and role. */
@Directive({
  selector: 'air-header-cell, th[air-header-cell]',
  host: {
    'class': 'air-header-cell',
    'role': 'columnheader',
  },
})
export class HeaderCellDirective extends CdkHeaderCell {
}

/** Footer cell template container that adds the right classes and role. */
@Directive({
  selector: 'air-footer-cell, td[air-footer-cell]',
  host: {
    'class': 'air-footer-cell',
    'role': 'gridcell',
  },
})
export class FooterCellDirective extends CdkFooterCell {
}

/** Cell template container that adds the right classes and role. */
@Directive({
  selector: 'air-cell, td[air-cell]',
  host: {
    'class': 'air-cell',
    'role': 'gridcell',
  },
})
export class CellDirective extends CdkCell {
}
