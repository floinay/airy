import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BreakpointsStylesManager, ChangesState} from '../../../cdk';
import {GRID_ITEM_PROVIDERS} from './grid-item.providers';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

type GridItem =
  1
  | '1'
  | 2
  | '2'
  | 3
  | '3'
  | 4
  | '4'
  | 5
  | '5'
  | 6
  | '6'
  | 7
  | '7'
  | 8
  | '8'
  | 9
  | '9'
  | 10
  | '10'
  | 11
  | '11'
  | 12
  | '12';

@Directive({
  selector: `
  [airGridItem],
  [xs.airGridItem],
  [sm.airGridItem],
  [md.airGridItem],
  [lg.airGridItem],
  [xl.airGridItem],
  [ltSm.airGridItem],
  [ltMd.airGridItem],
  [ltLg.airGridItem],
  [ltXl.airGridItem],
  [gtSm.airGridItem],
  [gtMd.airGridItem],
  [gtLg.airGridItem],
  [gtXs.airGridItem],
  `,
  providers: [GRID_ITEM_PROVIDERS]
})
@UntilDestroy()
export class GridItemDirective implements OnChanges {
  @HostBinding('class.air-grid-item') width = '100%';

  @Input() airGridItem?: GridItem;
  @Input('xs.airGridItem') xsAirGridItem?: GridItem;
  @Input('sm.airGridItem') smAirGridItem?: GridItem;
  @Input('md.airGridItem') mdAirGridItem?: GridItem;
  @Input('lg.airGridItem') lgAirGridItem?: GridItem;
  @Input('xl.airGridItem') xlAirGridItem?: GridItem;
  @Input('ltSm.airGridItem') ltSmAirGridItem?: GridItem;
  @Input('ltMd.airGridItem') ltMdAirGridItem?: GridItem;
  @Input('ltLg.airGridItem') ltLgAirGridItem?: GridItem;
  @Input('ltXl.airGridItem') ltXlAirGridItem?: GridItem;
  @Input('gtSm.airGridItem') gtSmAirGridItem?: GridItem;
  @Input('gtMd.airGridItem') gtMdAirGridItem?: GridItem;
  @Input('gtLg.airGridItem') gtLgAirGridItem?: GridItem;
  @Input('gtXs.airGridItem') gtXsAirGridItem?: GridItem;

  constructor(private breakpointsStylesManager: BreakpointsStylesManager,
              private changesState: ChangesState<string, string>) {
    this.breakpointsStylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }
}
