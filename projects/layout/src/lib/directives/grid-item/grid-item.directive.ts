import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GRID_ITEM_PROVIDERS} from './grid-item.providers';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BreakpointsStylesManager} from '@airy-ui/cdk';
import {ChangesState} from '@airy-ui/cdk';

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
  | '12'
  | string;

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
  [airFilledGridItem],
  [xs.airFilledGridItem],
  [sm.airFilledGridItem],
  [md.airFilledGridItem],
  [lg.airFilledGridItem],
  [xl.airFilledGridItem],
  [ltSm.airFilledGridItem],
  [ltMd.airFilledGridItem],
  [ltLg.airFilledGridItem],
  [ltXl.airFilledGridItem],
  [gtSm.airFilledGridItem],
  [gtMd.airFilledGridItem],
  [gtLg.airFilledGridItem],
  [gtXs.airFilledGridItem],
  [airFixedGridItem],
  [xs.airFixedGridItem],
  [sm.airFixedGridItem],
  [md.airFixedGridItem],
  [lg.airFixedGridItem],
  [xl.airFixedGridItem],
  [ltSm.airFixedGridItem],
  [ltMd.airFixedGridItem],
  [ltLg.airFixedGridItem],
  [ltXl.airFixedGridItem],
  [gtSm.airFixedGridItem],
  [gtMd.airFixedGridItem],
  [gtLg.airFixedGridItem],
  [gtXs.airFixedGridItem],
  `,
  providers: [GRID_ITEM_PROVIDERS]
})
@UntilDestroy()
export class GridItemDirective implements OnChanges {
  @HostBinding('class.air-grid-item') defaultClass = true;

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

  @Input() airFilledGridItem?: GridItem;
  @Input('xs.airFilledGridItem') xsAirFilledGridItem?: GridItem;
  @Input('sm.airFilledGridItem') smAirFilledGridItem?: GridItem;
  @Input('md.airFilledGridItem') mdAirFilledGridItem?: GridItem;
  @Input('lg.airFilledGridItem') lgAirFilledGridItem?: GridItem;
  @Input('xl.airFilledGridItem') xlAirFilledGridItem?: GridItem;
  @Input('ltSm.airFilledGridItem') ltSmAirFilledGridItem?: GridItem;
  @Input('ltMd.airFilledGridItem') ltMdAirFilledGridItem?: GridItem;
  @Input('ltLg.airFilledGridItem') ltLgAirFilledGridItem?: GridItem;
  @Input('ltXl.airFilledGridItem') ltXlAirFilledGridItem?: GridItem;
  @Input('gtSm.airFilledGridItem') gtSmAirFilledGridItem?: GridItem;
  @Input('gtMd.airFilledGridItem') gtMdAirFilledGridItem?: GridItem;
  @Input('gtLg.airFilledGridItem') gtLgAirFilledGridItem?: GridItem;
  @Input('gtXs.airFilledGridItem') gtXsAirFilledGridItem?: GridItem;

  @Input() airFixedGridItem?: GridItem;
  @Input('xs.airFixedGridItem') xsAirFixedGridItem?: GridItem;
  @Input('sm.airFixedGridItem') smAirFixedGridItem?: GridItem;
  @Input('md.airFixedGridItem') mdAirFixedGridItem?: GridItem;
  @Input('lg.airFixedGridItem') lgAirFixedGridItem?: GridItem;
  @Input('xl.airFixedGridItem') xlAirFixedGridItem?: GridItem;
  @Input('ltSm.airFixedGridItem') ltSmAirFixedGridItem?: GridItem;
  @Input('ltMd.airFixedGridItem') ltMdAirFixedGridItem?: GridItem;
  @Input('ltLg.airFixedGridItem') ltLgAirFixedGridItem?: GridItem;
  @Input('ltXl.airFixedGridItem') ltXlAirFixedGridItem?: GridItem;
  @Input('gtSm.airFixedGridItem') gtSmAirFixedGridItem?: GridItem;
  @Input('gtMd.airFixedGridItem') gtMdAirFixedGridItem?: GridItem;
  @Input('gtLg.airFixedGridItem') gtLgAirFixedGridItem?: GridItem;
  @Input('gtXs.airFixedGridItem') gtXsAirFixedGridItem?: GridItem;

  constructor(private breakpointsStylesManager: BreakpointsStylesManager,
              private changesState: ChangesState<string, string>) {
    this.breakpointsStylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }
}
