import {Directive, Input} from '@angular/core';
import {AbstractIndentsDirective} from './abstract-indents-directive';
import {ThemeSize} from '../../../cdk';
import {MARGINS_PROVIDERS} from './indents.providers';

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
  [gtXs.airMarginEnd],
  [airMarginHorizontal],
  [xs.airMarginHorizontal],
  [sm.airMarginHorizontal],
  [md.airMarginHorizontal],
  [lg.airMarginHorizontal],
  [xl.airMarginHorizontal],
  [ltSm.airMarginHorizontal],
  [ltMd.airMarginHorizontal],
  [ltLg.airMarginHorizontal],
  [ltXl.airMarginHorizontal],
  [gtSm.airMarginHorizontal],
  [gtMd.airMarginHorizontal],
  [gtLg.airMarginHorizontal],
  [gtXs.airMarginHorizontal],
  [airMarginVertical],
  [xs.airMarginVertical],
  [sm.airMarginVertical],
  [md.airMarginVertical],
  [lg.airMarginVertical],
  [xl.airMarginVertical],
  [ltSm.airMarginVertical],
  [ltMd.airMarginVertical],
  [ltLg.airMarginVertical],
  [ltXl.airMarginVertical],
  [gtSm.airMarginVertical],
  [gtMd.airMarginVertical],
  [gtLg.airMarginVertical],
  [gtXs.airMarginVertical]
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

  @Input() airMarginHorizontal: ThemeSize;
  @Input('xs.airMarginHorizontal') xsAirMarginHorizontal: ThemeSize;
  @Input('sm.airMarginHorizontal') smAirMarginHorizontal: ThemeSize;
  @Input('md.airMarginHorizontal') mdAirMarginHorizontal: ThemeSize;
  @Input('lg.airMarginHorizontal') lgAirMarginHorizontal: ThemeSize;
  @Input('xl.airMarginHorizontal') xlAirMarginHorizontal: ThemeSize;
  @Input('ltSm.airMarginHorizontal') ltSmAirMarginHorizontal: ThemeSize;
  @Input('ltMd.airMarginHorizontal') ltMdAirMarginHorizontal: ThemeSize;
  @Input('ltLg.airMarginHorizontal') ltLgAirMarginHorizontal: ThemeSize;
  @Input('ltXl.airMarginHorizontal') ltXlAirMarginHorizontal: ThemeSize;
  @Input('gtSm.airMarginHorizontal') gtSmAirMarginHorizontal: ThemeSize;
  @Input('gtMd.airMarginHorizontal') gtMdAirMarginHorizontal: ThemeSize;
  @Input('gtLg.airMarginHorizontal') gtLgAirMarginHorizontal: ThemeSize;
  @Input('gtXs.airMarginHorizontal') gtXsAirMarginHorizontal: ThemeSize;

  @Input() airMarginVertical: ThemeSize;
  @Input('xs.airMarginVertical') xsAirMarginVertical: ThemeSize;
  @Input('sm.airMarginVertical') smAirMarginVertical: ThemeSize;
  @Input('md.airMarginVertical') mdAirMarginVertical: ThemeSize;
  @Input('lg.airMarginVertical') lgAirMarginVertical: ThemeSize;
  @Input('xl.airMarginVertical') xlAirMarginVertical: ThemeSize;
  @Input('ltSm.airMarginVertical') ltSmAirMarginVertical: ThemeSize;
  @Input('ltMd.airMarginVertical') ltMdAirMarginVertical: ThemeSize;
  @Input('ltLg.airMarginVertical') ltLgAirMarginVertical: ThemeSize;
  @Input('ltXl.airMarginVertical') ltXlAirMarginVertical: ThemeSize;
  @Input('gtSm.airMarginVertical') gtSmAirMarginVertical: ThemeSize;
  @Input('gtMd.airMarginVertical') gtMdAirMarginVertical: ThemeSize;
  @Input('gtLg.airMarginVertical') gtLgAirMarginVertical: ThemeSize;
  @Input('gtXs.airMarginVertical') gtXsAirMarginVertical: ThemeSize;
}
