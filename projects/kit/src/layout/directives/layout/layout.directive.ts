import {Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Layout, LayoutAlign} from './types';
import {BreakpointsStylesManager, ChangesState} from '../../../cdk';
import {LAYOUT_PROVIDERS} from './layout.providers';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Gap} from './types/gap';


@Directive({
  selector: `
  [airGrid],
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
  [airRowGap],
  [xs.airRowGap],
  [sm.airRowGap],
  [md.airRowGap],
  [lg.airRowGap],
  [xl.airRowGap],
  [ltSm.airRowGap],
  [ltMd.airRowGap],
  [ltLg.airRowGap],
  [ltXl.airRowGap],
  [gtSm.airRowGap],
  [gtMd.airRowGap],
  [gtLg.airRowGap],
  [gtXs.airRowGap],
  [airColumnGap],
  [xs.airColumnGap],
  [sm.airColumnGap],
  [md.airColumnGap],
  [lg.airColumnGap],
  [xl.airColumnGap],
  [ltSm.airColumnGap],
  [ltMd.airColumnGap],
  [ltLg.airColumnGap],
  [ltXl.airColumnGap],
  [gtSm.airColumnGap],
  [gtMd.airColumnGap],
  [gtLg.airColumnGap],
  [gtXs.airColumnGap],
  `,
  providers: LAYOUT_PROVIDERS
})
@UntilDestroy()
export class LayoutDirective implements OnChanges {
  @HostBinding('style.display') flex = 'flex';

  @HostBinding('class.air-grid')
  get isGrid(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airGrid');
  }

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

  @Input() airRowGap: Gap;
  @Input('xs.airRowGap') xsAirRowGap: Gap;
  @Input('sm.airRowGap') smAirRowGap: Gap;
  @Input('md.airRowGap') mdAirRowGap: Gap;
  @Input('lg.airRowGap') lgAirRowGap: Gap;
  @Input('xl.airRowGap') xlAirRowGap: Gap;
  @Input('ltSm.airRowGap') ltSmAirRowGap: Gap;
  @Input('ltMd.airRowGap') ltMdAirRowGap: Gap;
  @Input('ltLg.airRowGap') ltLgAirRowGap: Gap;
  @Input('ltXl.airRowGap') ltXlAirRowGap: Gap;
  @Input('gtSm.airRowGap') gtSmAirRowGap: Gap;
  @Input('gtMd.airRowGap') gtMdAirRowGap: Gap;
  @Input('gtLg.airRowGap') gtLgAirRowGap: Gap;
  @Input('gtXs.airRowGap') gtXsAirRowGap: Gap;

  @Input() airColumnGap: Gap;
  @Input('xs.airColumnGap') xsAirColumnGap: Gap;
  @Input('sm.airColumnGap') smAirColumnGap: Gap;
  @Input('md.airColumnGap') mdAirColumnGap: Gap;
  @Input('lg.airColumnGap') lgAirColumnGap: Gap;
  @Input('xl.airColumnGap') xlAirColumnGap: Gap;
  @Input('ltSm.airColumnGap') ltSmAirColumnGap: Gap;
  @Input('ltMd.airColumnGap') ltMdAirColumnGap: Gap;
  @Input('ltLg.airColumnGap') ltLgAirColumnGap: Gap;
  @Input('ltXl.airColumnGap') ltXlAirColumnGap: Gap;
  @Input('gtSm.airColumnGap') gtSmAirColumnGap: Gap;
  @Input('gtMd.airColumnGap') gtMdAirColumnGap: Gap;
  @Input('gtLg.airColumnGap') gtLgAirColumnGap: Gap;
  @Input('gtXs.airColumnGap') gtXsAirColumnGap: Gap;

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

  constructor(private changesState: ChangesState<string, string>,
              private elementRef: ElementRef,
              breakpointsStylesManager: BreakpointsStylesManager) {
    breakpointsStylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }

}
