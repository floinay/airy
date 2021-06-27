import {Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Layout, LayoutAlign} from './types';
import {LAYOUT_PROVIDERS} from './layout.providers';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Gap} from './types/gap';
import {BreakpointsStylesManager} from '@airy-ui/cdk/services/styles';
import {ChangesState} from '@airy-ui/cdk/services/changes-state';


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
  [airColGap],
  [xs.airColGap],
  [sm.airColGap],
  [md.airColGap],
  [lg.airColGap],
  [xl.airColGap],
  [ltSm.airColGap],
  [ltMd.airColGap],
  [ltLg.airColGap],
  [ltXl.airColGap],
  [gtSm.airColGap],
  [gtMd.airColGap],
  [gtLg.airColGap],
  [gtXs.airColGap],
  [airColCount],
  [xs.airColCount],
  [sm.airColCount],
  [md.airColCount],
  [lg.airColCount],
  [xl.airColCount],
  [ltSm.airColCount],
  [ltMd.airColCount],
  [ltLg.airColCount],
  [ltXl.airColCount],
  [gtSm.airColCount],
  [gtMd.airColCount],
  [gtLg.airColCount],
  [gtXs.airColCount],
  [airColGap],
  [xs.airColGap],
  [sm.airColGap],
  [md.airColGap],
  [lg.airColGap],
  [xl.airColGap],
  [ltSm.airColGap],
  [ltMd.airColGap],
  [ltLg.airColGap],
  [ltXl.airColGap],
  [gtSm.airColGap],
  [gtMd.airColGap],
  [gtLg.airColGap],
  [gtXs.airColGap],
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

  @Input() airColCount?: number;
  @Input('xs.airColCount') xsAirColCount?: number;
  @Input('sm.airColCount') smAirColCount?: number;
  @Input('md.airColCount') mdAirColCount?: number;
  @Input('lg.airColCount') lgAirColCount?: number;
  @Input('xl.airColCount') xlAirColCount?: number;
  @Input('ltSm.airColCount') ltSmAirColCount?: number;
  @Input('ltMd.airColCount') ltMdAirColCount?: number;
  @Input('ltLg.airColCount') ltLgAirColCount?: number;
  @Input('ltXl.airColCount') ltXlAirColCount?: number;
  @Input('gtSm.airColCount') gtSmAirColCount?: number;
  @Input('gtMd.airColCount') gtMdAirColCount?: number;
  @Input('gtLg.airColCount') gtLgAirColCount?: number;
  @Input('gtXs.airColCount') gtXsAirColCount?: number;

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

  @Input() airColGap: Gap;
  @Input('xs.airColGap') xsAirColGap: Gap;
  @Input('sm.airColGap') smAirColGap: Gap;
  @Input('md.airColGap') mdAirColGap: Gap;
  @Input('lg.airColGap') lgAirColGap: Gap;
  @Input('xl.airColGap') xlAirColGap: Gap;
  @Input('ltSm.airColGap') ltSmAirColGap: Gap;
  @Input('ltMd.airColGap') ltMdAirColGap: Gap;
  @Input('ltLg.airColGap') ltLgAirColGap: Gap;
  @Input('ltXl.airColGap') ltXlAirColGap: Gap;
  @Input('gtSm.airColGap') gtSmAirColGap: Gap;
  @Input('gtMd.airColGap') gtMdAirColGap: Gap;
  @Input('gtLg.airColGap') gtLgAirColGap: Gap;
  @Input('gtXs.airColGap') gtXsAirColGap: Gap;

  @Input() airLayoutAlign: LayoutAlign;
  @Input('xs.airLayoutAlign') xsAirLayoutAlign: LayoutAlign;
  @Input('sm.airLayoutAlign') smAirLayoutAlign: LayoutAlign;
  @Input('md.airLayoutAlign') mdAirLayoutAlign: LayoutAlign;
  @Input('lg.airLayoutAlign') lgAirLayoutAlign: LayoutAlign;
  @Input('xl.airLayoutAlign') xlAirLayoutAlign: LayoutAlign;
  @Input('ltSm.airLayoutAlign') ltAirSmLayoutAlign: LayoutAlign;
  @Input('ltMd.airLayoutAlign') ltAirMdLayoutAlign: LayoutAlign;
  @Input('ltLg.airLayoutAlign') ltAirLgLayoutAlign: LayoutAlign;
  @Input('ltXl.airLayoutAlign') ltAirXlLayoutAlign: LayoutAlign;
  @Input('gtSm.airLayoutAlign') gtAirSmLayoutAlign: LayoutAlign;
  @Input('gtMd.airLayoutAlign') gtAirMdLayoutAlign: LayoutAlign;
  @Input('gtLg.airLayoutAlign') gtAirLgLayoutAlign: LayoutAlign;
  @Input('gtXs.airLayoutAlign') gtAirXsLayoutAlign: LayoutAlign;

  constructor(private changesState: ChangesState<string, string>,
              private elementRef: ElementRef<HTMLDivElement>,
              breakpointsStylesManager: BreakpointsStylesManager) {
    breakpointsStylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }

}
