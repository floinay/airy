import {Directive, Input} from '@angular/core';
import {AbstractIndentsDirective} from './abstract-indents-directive';
import {ThemeSizeWithNegative} from '../../../../../../cdk/src/lib';
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
  @Input() airMargin: ThemeSizeWithNegative;
  @Input('xs.airMargin') xsAirMargin: ThemeSizeWithNegative;
  @Input('sm.airMargin') smAirMargin: ThemeSizeWithNegative;
  @Input('md.airMargin') mdAirMargin: ThemeSizeWithNegative;
  @Input('lg.airMargin') lgAirMargin: ThemeSizeWithNegative;
  @Input('xl.airMargin') xlAirMargin: ThemeSizeWithNegative;
  @Input('ltSm.airMargin') ltSmAirMargin: ThemeSizeWithNegative;
  @Input('ltMd.airMargin') ltMdAirMargin: ThemeSizeWithNegative;
  @Input('ltLg.airMargin') ltLgAirMargin: ThemeSizeWithNegative;
  @Input('ltXl.airMargin') ltXlAirMargin: ThemeSizeWithNegative;
  @Input('gtSm.airMargin') gtSmAirMargin: ThemeSizeWithNegative;
  @Input('gtMd.airMargin') gtMdAirMargin: ThemeSizeWithNegative;
  @Input('gtLg.airMargin') gtLgAirMargin: ThemeSizeWithNegative;
  @Input('gtXs.airMargin') gtXsAirMargin: ThemeSizeWithNegative;

  @Input() airMarginTop: ThemeSizeWithNegative;
  @Input('xs.airMarginTop') xsAirMarginTop: ThemeSizeWithNegative;
  @Input('sm.airMarginTop') smAirMarginTop: ThemeSizeWithNegative;
  @Input('md.airMarginTop') mdAirMarginTop: ThemeSizeWithNegative;
  @Input('lg.airMarginTop') lgAirMarginTop: ThemeSizeWithNegative;
  @Input('xl.airMarginTop') xlAirMarginTop: ThemeSizeWithNegative;
  @Input('ltSm.airMarginTop') ltSmAirMarginTop: ThemeSizeWithNegative;
  @Input('ltMd.airMarginTop') ltMdAirMarginTop: ThemeSizeWithNegative;
  @Input('ltLg.airMarginTop') ltLgAirMarginTop: ThemeSizeWithNegative;
  @Input('ltXl.airMarginTop') ltXlAirMarginTop: ThemeSizeWithNegative;
  @Input('gtSm.airMarginTop') gtSmAirMarginTop: ThemeSizeWithNegative;
  @Input('gtMd.airMarginTop') gtMdAirMarginTop: ThemeSizeWithNegative;
  @Input('gtLg.airMarginTop') gtLgAirMarginTop: ThemeSizeWithNegative;
  @Input('gtXs.airMarginTop') gtXsAirMarginTop: ThemeSizeWithNegative;

  @Input() airMarginBottom: ThemeSizeWithNegative;
  @Input('xs.airMarginBottom') xsAirMarginBottom: ThemeSizeWithNegative;
  @Input('sm.airMarginBottom') smAirMarginBottom: ThemeSizeWithNegative;
  @Input('md.airMarginBottom') mdAirMarginBottom: ThemeSizeWithNegative;
  @Input('lg.airMarginBottom') lgAirMarginBottom: ThemeSizeWithNegative;
  @Input('xl.airMarginBottom') xlAirMarginBottom: ThemeSizeWithNegative;
  @Input('ltSm.airMarginBottom') ltSmAirMarginBottom: ThemeSizeWithNegative;
  @Input('ltMd.airMarginBottom') ltMdAirMarginBottom: ThemeSizeWithNegative;
  @Input('ltLg.airMarginBottom') ltLgAirMarginBottom: ThemeSizeWithNegative;
  @Input('ltXl.airMarginBottom') ltXlAirMarginBottom: ThemeSizeWithNegative;
  @Input('gtSm.airMarginBottom') gtSmAirMarginBottom: ThemeSizeWithNegative;
  @Input('gtMd.airMarginBottom') gtMdAirMarginBottom: ThemeSizeWithNegative;
  @Input('gtLg.airMarginBottom') gtLgAirMarginBottom: ThemeSizeWithNegative;
  @Input('gtXs.airMarginBottom') gtXsAirMarginBottom: ThemeSizeWithNegative;

  @Input() airMarginStart: ThemeSizeWithNegative;
  @Input('xs.airMarginStart') xsAirMarginStart: ThemeSizeWithNegative;
  @Input('sm.airMarginStart') smAirMarginStart: ThemeSizeWithNegative;
  @Input('md.airMarginStart') mdAirMarginStart: ThemeSizeWithNegative;
  @Input('lg.airMarginStart') lgAirMarginStart: ThemeSizeWithNegative;
  @Input('xl.airMarginStart') xlAirMarginStart: ThemeSizeWithNegative;
  @Input('ltSm.airMarginStart') ltSmAirMarginStart: ThemeSizeWithNegative;
  @Input('ltMd.airMarginStart') ltMdAirMarginStart: ThemeSizeWithNegative;
  @Input('ltLg.airMarginStart') ltLgAirMarginStart: ThemeSizeWithNegative;
  @Input('ltXl.airMarginStart') ltXlAirMarginStart: ThemeSizeWithNegative;
  @Input('gtSm.airMarginStart') gtSmAirMarginStart: ThemeSizeWithNegative;
  @Input('gtMd.airMarginStart') gtMdAirMarginStart: ThemeSizeWithNegative;
  @Input('gtLg.airMarginStart') gtLgAirMarginStart: ThemeSizeWithNegative;
  @Input('gtXs.airMarginStart') gtXsAirMarginStart: ThemeSizeWithNegative;

  @Input() airMarginEnd: ThemeSizeWithNegative;
  @Input('xs.airMarginEnd') xsAirMarginEnd: ThemeSizeWithNegative;
  @Input('sm.airMarginEnd') smAirMarginEnd: ThemeSizeWithNegative;
  @Input('md.airMarginEnd') mdAirMarginEnd: ThemeSizeWithNegative;
  @Input('lg.airMarginEnd') lgAirMarginEnd: ThemeSizeWithNegative;
  @Input('xl.airMarginEnd') xlAirMarginEnd: ThemeSizeWithNegative;
  @Input('ltSm.airMarginEnd') ltSmAirMarginEnd: ThemeSizeWithNegative;
  @Input('ltMd.airMarginEnd') ltMdAirMarginEnd: ThemeSizeWithNegative;
  @Input('ltLg.airMarginEnd') ltLgAirMarginEnd: ThemeSizeWithNegative;
  @Input('ltXl.airMarginEnd') ltXlAirMarginEnd: ThemeSizeWithNegative;
  @Input('gtSm.airMarginEnd') gtSmAirMarginEnd: ThemeSizeWithNegative;
  @Input('gtMd.airMarginEnd') gtMdAirMarginEnd: ThemeSizeWithNegative;
  @Input('gtLg.airMarginEnd') gtLgAirMarginEnd: ThemeSizeWithNegative;
  @Input('gtXs.airMarginEnd') gtXsAirMarginEnd: ThemeSizeWithNegative;

  @Input() airMarginHorizontal: ThemeSizeWithNegative;
  @Input('xs.airMarginHorizontal') xsAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('sm.airMarginHorizontal') smAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('md.airMarginHorizontal') mdAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('lg.airMarginHorizontal') lgAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('xl.airMarginHorizontal') xlAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('ltSm.airMarginHorizontal') ltSmAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('ltMd.airMarginHorizontal') ltMdAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('ltLg.airMarginHorizontal') ltLgAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('ltXl.airMarginHorizontal') ltXlAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('gtSm.airMarginHorizontal') gtSmAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('gtMd.airMarginHorizontal') gtMdAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('gtLg.airMarginHorizontal') gtLgAirMarginHorizontal: ThemeSizeWithNegative;
  @Input('gtXs.airMarginHorizontal') gtXsAirMarginHorizontal: ThemeSizeWithNegative;

  @Input() airMarginVertical: ThemeSizeWithNegative;
  @Input('xs.airMarginVertical') xsAirMarginVertical: ThemeSizeWithNegative;
  @Input('sm.airMarginVertical') smAirMarginVertical: ThemeSizeWithNegative;
  @Input('md.airMarginVertical') mdAirMarginVertical: ThemeSizeWithNegative;
  @Input('lg.airMarginVertical') lgAirMarginVertical: ThemeSizeWithNegative;
  @Input('xl.airMarginVertical') xlAirMarginVertical: ThemeSizeWithNegative;
  @Input('ltSm.airMarginVertical') ltSmAirMarginVertical: ThemeSizeWithNegative;
  @Input('ltMd.airMarginVertical') ltMdAirMarginVertical: ThemeSizeWithNegative;
  @Input('ltLg.airMarginVertical') ltLgAirMarginVertical: ThemeSizeWithNegative;
  @Input('ltXl.airMarginVertical') ltXlAirMarginVertical: ThemeSizeWithNegative;
  @Input('gtSm.airMarginVertical') gtSmAirMarginVertical: ThemeSizeWithNegative;
  @Input('gtMd.airMarginVertical') gtMdAirMarginVertical: ThemeSizeWithNegative;
  @Input('gtLg.airMarginVertical') gtLgAirMarginVertical: ThemeSizeWithNegative;
  @Input('gtXs.airMarginVertical') gtXsAirMarginVertical: ThemeSizeWithNegative;
}
