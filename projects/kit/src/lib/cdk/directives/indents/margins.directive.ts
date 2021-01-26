import {Directive, Input} from '@angular/core';
import {AbstractIndentsDirective} from './abstract-indents-directive';
import {MARGINS_PROPS_MAP, MARGINS_PROVIDERS, MARGINS_VALUES_MAP} from './indents.providers';
import {ThemeSize} from '../../core';

@Directive({
  selector: `
  [airMargin],
  [xs.airMargin],
  [sm.airMargin],
  [md.airMargin],
  [lg.airMargin],
  [xl.airMargin],
  [ltSm.airMargin],
  [ltMd.airMargin],
  [ltLg.airMargin],
  [ltXl.airMargin],
  [gtSm.airMargin],
  [gtMd.airMargin],
  [gtLg.airMargin],
  [gtXs.airMargin],
  [airMarginTop],
  [xs.airMarginTop],
  [sm.airMarginTop],
  [md.airMarginTop],
  [lg.airMarginTop],
  [xl.airMarginTop],
  [ltSm.airMarginTop],
  [ltMd.airMarginTop],
  [ltLg.airMarginTop],
  [ltXl.airMarginTop],
  [gtSm.airMarginTop],
  [gtMd.airMarginTop],
  [gtLg.airMarginTop],
  [gtXs.airMarginTop],
  [airMarginBottom],
  [xs.airMarginBottom],
  [sm.airMarginBottom],
  [md.airMarginBottom],
  [lg.airMarginBottom],
  [xl.airMarginBottom],
  [ltSm.airMarginBottom],
  [ltMd.airMarginBottom],
  [ltLg.airMarginBottom],
  [ltXl.airMarginBottom],
  [gtSm.airMarginBottom],
  [gtMd.airMarginBottom],
  [gtLg.airMarginBottom],
  [gtXs.airMarginBottom],
  [airMarginStart],
  [xs.airMarginStart],
  [sm.airMarginStart],
  [md.airMarginStart],
  [lg.airMarginStart],
  [xl.airMarginStart],
  [ltSm.airMarginStart],
  [ltMd.airMarginStart],
  [ltLg.airMarginStart],
  [ltXl.airMarginStart],
  [gtSm.airMarginStart],
  [gtMd.airMarginStart],
  [gtLg.airMarginStart],
  [gtXs.airMarginStart],
  [airMarginEnd],
  [xs.airMarginEnd],
  [sm.airMarginEnd],
  [md.airMarginEnd],
  [lg.airMarginEnd],
  [xl.airMarginEnd],
  [ltSm.airMarginEnd],
  [ltMd.airMarginEnd],
  [ltLg.airMarginEnd],
  [ltXl.airMarginEnd],
  [gtSm.airMarginEnd],
  [gtMd.airMarginEnd],
  [gtLg.airMarginEnd],
  [gtXs.airMarginEnd]
  `,
  providers: MARGINS_PROVIDERS
})
export class MarginsDirective extends AbstractIndentsDirective {
  @Input() airMargin: ThemeSize;
  @Input('xs.airMargin') xsAirMargin: ThemeSize;
  @Input('sm.airMargin') smAirMargin: ThemeSize;
  @Input('md.airMargin') mdAirMargin: ThemeSize;
  @Input('lg.airMargin') lgAirMargin: ThemeSize;
  @Input('xl.airMargin') xlAirMargin: ThemeSize;
  @Input('ltSm.airMargin') ltSmAirMargin: ThemeSize;
  @Input('ltMd.airMargin') ltMdAirMargin: ThemeSize;
  @Input('ltLg.airMargin') ltLgAirMargin: ThemeSize;
  @Input('ltXl.airMargin') ltXlAirMargin: ThemeSize;
  @Input('gtSm.airMargin') gtSmAirMargin: ThemeSize;
  @Input('gtMd.airMargin') gtMdAirMargin: ThemeSize;
  @Input('gtLg.airMargin') gtLgAirMargin: ThemeSize;
  @Input('gtXs.airMargin') gtXsAirMargin: ThemeSize;

  @Input() airMarginTop: ThemeSize;
  @Input('xs.airMarginTop') xsAirMarginTop: ThemeSize;
  @Input('sm.airMarginTop') smAirMarginTop: ThemeSize;
  @Input('md.airMarginTop') mdAirMarginTop: ThemeSize;
  @Input('lg.airMarginTop') lgAirMarginTop: ThemeSize;
  @Input('xl.airMarginTop') xlAirMarginTop: ThemeSize;
  @Input('ltSm.airMarginTop') ltSmAirMarginTop: ThemeSize;
  @Input('ltMd.airMarginTop') ltMdAirMarginTop: ThemeSize;
  @Input('ltLg.airMarginTop') ltLgAirMarginTop: ThemeSize;
  @Input('ltXl.airMarginTop') ltXlAirMarginTop: ThemeSize;
  @Input('gtSm.airMarginTop') gtSmAirMarginTop: ThemeSize;
  @Input('gtMd.airMarginTop') gtMdAirMarginTop: ThemeSize;
  @Input('gtLg.airMarginTop') gtLgAirMarginTop: ThemeSize;
  @Input('gtXs.airMarginTop') gtXsAirMarginTop: ThemeSize;

  @Input() airMarginBottom: ThemeSize;
  @Input('xs.airMarginBottom') xsAirMarginBottom: ThemeSize;
  @Input('sm.airMarginBottom') smAirMarginBottom: ThemeSize;
  @Input('md.airMarginBottom') mdAirMarginBottom: ThemeSize;
  @Input('lg.airMarginBottom') lgAirMarginBottom: ThemeSize;
  @Input('xl.airMarginBottom') xlAirMarginBottom: ThemeSize;
  @Input('ltSm.airMarginBottom') ltSmAirMarginBottom: ThemeSize;
  @Input('ltMd.airMarginBottom') ltMdAirMarginBottom: ThemeSize;
  @Input('ltLg.airMarginBottom') ltLgAirMarginBottom: ThemeSize;
  @Input('ltXl.airMarginBottom') ltXlAirMarginBottom: ThemeSize;
  @Input('gtSm.airMarginBottom') gtSmAirMarginBottom: ThemeSize;
  @Input('gtMd.airMarginBottom') gtMdAirMarginBottom: ThemeSize;
  @Input('gtLg.airMarginBottom') gtLgAirMarginBottom: ThemeSize;
  @Input('gtXs.airMarginBottom') gtXsAirMarginBottom: ThemeSize;

  @Input() airMarginStart: ThemeSize;
  @Input('xs.airMarginStart') xsAirMarginStart: ThemeSize;
  @Input('sm.airMarginStart') smAirMarginStart: ThemeSize;
  @Input('md.airMarginStart') mdAirMarginStart: ThemeSize;
  @Input('lg.airMarginStart') lgAirMarginStart: ThemeSize;
  @Input('xl.airMarginStart') xlAirMarginStart: ThemeSize;
  @Input('ltSm.airMarginStart') ltSmAirMarginStart: ThemeSize;
  @Input('ltMd.airMarginStart') ltMdAirMarginStart: ThemeSize;
  @Input('ltLg.airMarginStart') ltLgAirMarginStart: ThemeSize;
  @Input('ltXl.airMarginStart') ltXlAirMarginStart: ThemeSize;
  @Input('gtSm.airMarginStart') gtSmAirMarginStart: ThemeSize;
  @Input('gtMd.airMarginStart') gtMdAirMarginStart: ThemeSize;
  @Input('gtLg.airMarginStart') gtLgAirMarginStart: ThemeSize;
  @Input('gtXs.airMarginStart') gtXsAirMarginStart: ThemeSize;

  @Input() airMarginEnd: ThemeSize;
  @Input('xs.airMarginEnd') xsAirMarginEnd: ThemeSize;
  @Input('sm.airMarginEnd') smAirMarginEnd: ThemeSize;
  @Input('md.airMarginEnd') mdAirMarginEnd: ThemeSize;
  @Input('lg.airMarginEnd') lgAirMarginEnd: ThemeSize;
  @Input('xl.airMarginEnd') xlAirMarginEnd: ThemeSize;
  @Input('ltSm.airMarginEnd') ltSmAirMarginEnd: ThemeSize;
  @Input('ltMd.airMarginEnd') ltMdAirMarginEnd: ThemeSize;
  @Input('ltLg.airMarginEnd') ltLgAirMarginEnd: ThemeSize;
  @Input('ltXl.airMarginEnd') ltXlAirMarginEnd: ThemeSize;
  @Input('gtSm.airMarginEnd') gtSmAirMarginEnd: ThemeSize;
  @Input('gtMd.airMarginEnd') gtMdAirMarginEnd: ThemeSize;
  @Input('gtLg.airMarginEnd') gtLgAirMarginEnd: ThemeSize;
  @Input('gtXs.airMarginEnd') gtXsAirMarginEnd: ThemeSize;
  protected bpStylesManager = this.bpStylesFactory.make(MARGINS_PROPS_MAP, MARGINS_VALUES_MAP);
}
