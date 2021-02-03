import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Layout} from './types/layout';
import {AlignItems, JustifyContent, LayoutAlign} from './types/layout-align';
import {ChangesState} from '../../../cdk';
import {LAYOUT_PROVIDERS} from './layout.providers';

// const layoutAlignFnc = (value) => {
//   // if (value) {
//   //   const {alignItems, justifyContent} = parseLayoutAlign(value);
//   //   this.justifyContent = justifyContent;
//   //   this.alignItems = alignItems;
//   // } else {
//   //   this.justifyContent = undefined;
//   //   this.alignItems = undefined;
//   // }
// };

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

  @HostBinding('style.justify-content') private justifyContent: JustifyContent | AlignItems | undefined;
  @HostBinding('style.align-items') private alignItems: AlignItems | JustifyContent | undefined;

  @Input() layoutAlign: LayoutAlign;
  @Input('xs.layoutAlign') xsLayoutAlign: Layout;
  @Input('sm.layoutAlign') smLayoutAlign: Layout;
  @Input('md.layoutAlign') mdLayoutAlign: Layout;
  @Input('lg.layoutAlign') lgLayoutAlign: Layout;
  @Input('xl.layoutAlign') xlLayoutAlign: Layout;
  @Input('ltSm.layoutAlign') ltSmLayoutAlign: Layout;
  @Input('ltMd.layoutAlign') ltMdLayoutAlign: Layout;
  @Input('ltLg.layoutAlign') ltLgLayoutAlign: Layout;
  @Input('ltXl.layoutAlign') ltXlLayoutAlign: Layout;
  @Input('gtSm.layoutAlign') gtSmLayoutAlign: Layout;
  @Input('gtMd.layoutAlign') gtMdLayoutAlign: Layout;
  @Input('gtLg.layoutAlign') gtLgLayoutAlign: Layout;
  @Input('gtXs.layoutAlign') gtXsLayoutAlign: Layout;

  constructor(private changesState: ChangesState<string, string>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }

}
