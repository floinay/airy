import {
  CDK_TABLE_TEMPLATE,
  CdkTable,
  CDK_TABLE,
  _CoalescedStyleScheduler,
  _COALESCED_STYLE_SCHEDULER,
  STICKY_POSITIONING_LISTENER,
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';
import {
  _DisposeViewRepeaterStrategy,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
} from '@angular/cdk/collections';


@Directive({
  selector: 'air-list-table[recycleRows], table[air-list-table][recycleRows]',
  providers: [{provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy}],
})
export class RecycleRowsDirective {
}


@Component({
  selector: 'air-list-table, table[air-list-table]',
  exportAs: 'airTable',
  template: CDK_TABLE_TEMPLATE,
  styleUrls: ['table.css'],
  host: {
    'class': 'air-list-table',
    '[class.air-list-table-fixed-layout]': 'fixedLayout',
  },
  providers: [
    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy},
    {provide: CdkTable, useExisting: TableComponent},
    {provide: CDK_TABLE, useExisting: TableComponent},
    {provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler},
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {provide: STICKY_POSITIONING_LISTENER, useValue: null},
  ],
  encapsulation: ViewEncapsulation.None,
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TableComponent<T> extends CdkTable<T> {
  /** Overrides the sticky CSS class set by the `CdkTable`. */
  protected override stickyCssClass = 'air-table-sticky';

  /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
  protected override needsPositionStickyOnElement = false;
}
