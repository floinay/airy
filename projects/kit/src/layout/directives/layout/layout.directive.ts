import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Layout, LayoutAlign} from './types';
import {BreakpointsStylesManager, ChangesState} from '../../../cdk';
import {LAYOUT_PROVIDERS} from './layout.providers';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';


@Directive({
  selector: `
  [airLayout],
  [xs.airLayout],
  [sm.airLayout],
  [md.airLayout],
  [lg.airLayout],
  [xl.airLayout],
  [ltSm.airLayout],
  [ltMd.airLayout],
  [ltLg.airLayout],
  [ltXl.airLayout],
  [gtSm.airLayout],
  [gtMd.airLayout],
  [gtLg.airLayout],
  [gtXs.airLayout],
  `,
  providers: LAYOUT_PROVIDERS
})
@UntilDestroy()
export class LayoutDirective implements OnChanges {
  @HostBinding('style.display') flex = 'flex';

  @HostBinding('style.flex-direction')
  @Input() airLayout: Layout = 'row';
  @Input('xs.airLayout') xsAirLayout: Layout;
  @Input('sm.airLayout') smAirLayout: Layout;
  @Input('md.airLayout') mdAirLayout: Layout;
  @Input('lg.airLayout') lgAirLayout: Layout;
  @Input('xl.airLayout') xlAirLayout: Layout;
  @Input('ltSm.airLayout') ltSmAirLayout: Layout;
  @Input('ltMd.airLayout') ltMdAirLayout: Layout;
  @Input('ltLg.airLayout') ltLgAirLayout: Layout;
  @Input('ltXl.airLayout') ltXlAirLayout: Layout;
  @Input('gtSm.airLayout') gtSmAirLayout: Layout;
  @Input('gtMd.airLayout') gtMdAirLayout: Layout;
  @Input('gtLg.airLayout') gtLgAirLayout: Layout;
  @Input('gtXs.airLayout') gtXsAirLayout: Layout;

  @Input() layoutAlign: LayoutAlign;
  @Input('xs.layoutAlign') xsLayoutAlign: LayoutAlign;
  @Input('sm.layoutAlign') smLayoutAlign: LayoutAlign;
  @Input('md.layoutAlign') mdLayoutAlign: LayoutAlign;
  @Input('lg.layoutAlign') lgLayoutAlign: LayoutAlign;
  @Input('xl.layoutAlign') xlLayoutAlign: LayoutAlign;
  @Input('ltSm.layoutAlign') ltSmLayoutAlign: LayoutAlign;
  @Input('ltMd.layoutAlign') ltMdLayoutAlign: LayoutAlign;
  @Input('ltLg.layoutAlign') ltLgLayoutAlign: LayoutAlign;
  @Input('ltXl.layoutAlign') ltXlLayoutAlign: LayoutAlign;
  @Input('gtSm.layoutAlign') gtSmLayoutAlign: LayoutAlign;
  @Input('gtMd.layoutAlign') gtMdLayoutAlign: LayoutAlign;
  @Input('gtLg.layoutAlign') gtLgLayoutAlign: LayoutAlign;
  @Input('gtXs.layoutAlign') gtXsLayoutAlign: LayoutAlign;

  constructor(private changesState: ChangesState<string, string>, breakpointsStylesManager: BreakpointsStylesManager) {
    breakpointsStylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }

}
