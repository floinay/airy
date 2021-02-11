import {Directive, Input} from '@angular/core';
import {AbstractIndentsDirective} from './abstract-indents-directive';
import {PADDINGS_PROVIDERS} from './indents.providers';
import {ThemeSize} from '../../../cdk';

@Directive({
  selector: `
  [airPadding],
  [airPaddingStart],
  [airPaddingEnd],
  [xs.airPadding],
  [sm.airPadding],
  [md.airPadding],
  [lg.airPadding],
  [xl.airPadding],
  [ltSm.airPadding],
  [ltMd.airPadding],
  [ltLg.airPadding],
  [ltXl.airPadding],
  [gtSm.airPadding],
  [gtMd.airPadding],
  [gtLg.airPadding],
  [gtXs.airPadding],
  [airPaddingTop],
  [xs.airPaddingTop],
  [sm.airPaddingTop],
  [md.airPaddingTop],
  [lg.airPaddingTop],
  [xl.airPaddingTop],
  [ltSm.airPaddingTop],
  [ltMd.airPaddingTop],
  [ltLg.airPaddingTop],
  [ltXl.airPaddingTop],
  [gtSm.airPaddingTop],
  [gtMd.airPaddingTop],
  [gtLg.airPaddingTop],
  [gtXs.airPaddingTop],
  [airPaddingBottom],
  [xs.airPaddingBottom],
  [sm.airPaddingBottom],
  [md.airPaddingBottom],
  [lg.airPaddingBottom],
  [xl.airPaddingBottom],
  [ltSm.airPaddingBottom],
  [ltMd.airPaddingBottom],
  [ltLg.airPaddingBottom],
  [ltXl.airPaddingBottom],
  [gtSm.airPaddingBottom],
  [gtMd.airPaddingBottom],
  [gtLg.airPaddingBottom],
  [gtXs.airPaddingBottom],
  [airPaddingStart],
  [xs.airPaddingStart],
  [sm.airPaddingStart],
  [md.airPaddingStart],
  [lg.airPaddingStart],
  [xl.airPaddingStart],
  [ltSm.airPaddingStart],
  [ltMd.airPaddingStart],
  [ltLg.airPaddingStart],
  [ltXl.airPaddingStart],
  [gtSm.airPaddingStart],
  [gtMd.airPaddingStart],
  [gtLg.airPaddingStart],
  [gtXs.airPaddingStart],
  [airPaddingEnd],
  [xs.airPaddingEnd],
  [sm.airPaddingEnd],
  [md.airPaddingEnd],
  [lg.airPaddingEnd],
  [xl.airPaddingEnd],
  [ltSm.airPaddingEnd],
  [ltMd.airPaddingEnd],
  [ltLg.airPaddingEnd],
  [ltXl.airPaddingEnd],
  [gtSm.airPaddingEnd],
  [gtMd.airPaddingEnd],
  [gtLg.airPaddingEnd],
  [gtXs.airPaddingEnd],
  `,
  providers: PADDINGS_PROVIDERS
})
export class PaddingsDirective extends AbstractIndentsDirective {
  @Input() airPadding: ThemeSize;
  @Input('xs.airPadding') xsAirPadding: ThemeSize;
  @Input('sm.airPadding') smAirPadding: ThemeSize;
  @Input('md.airPadding') mdAirPadding: ThemeSize;
  @Input('lg.airPadding') lgAirPadding: ThemeSize;
  @Input('xl.airPadding') xlAirPadding: ThemeSize;
  @Input('ltSm.airPadding') ltSmAirPadding: ThemeSize;
  @Input('ltMd.airPadding') ltMdAirPadding: ThemeSize;
  @Input('ltLg.airPadding') ltLgAirPadding: ThemeSize;
  @Input('ltXl.airPadding') ltXlAirPadding: ThemeSize;
  @Input('gtSm.airPadding') gtSmAirPadding: ThemeSize;
  @Input('gtMd.airPadding') gtMdAirPadding: ThemeSize;
  @Input('gtLg.airPadding') gtLgAirPadding: ThemeSize;
  @Input('gtXs.airPadding') gtXsAirPadding: ThemeSize;

  @Input() airPaddingTop: ThemeSize;
  @Input('xs.airPaddingTop') xsAirPaddingTop: ThemeSize;
  @Input('sm.airPaddingTop') smAirPaddingTop: ThemeSize;
  @Input('md.airPaddingTop') mdAirPaddingTop: ThemeSize;
  @Input('lg.airPaddingTop') lgAirPaddingTop: ThemeSize;
  @Input('xl.airPaddingTop') xlAirPaddingTop: ThemeSize;
  @Input('ltSm.airPaddingTop') ltSmAirPaddingTop: ThemeSize;
  @Input('ltMd.airPaddingTop') ltMdAirPaddingTop: ThemeSize;
  @Input('ltLg.airPaddingTop') ltLgAirPaddingTop: ThemeSize;
  @Input('ltXl.airPaddingTop') ltXlAirPaddingTop: ThemeSize;
  @Input('gtSm.airPaddingTop') gtSmAirPaddingTop: ThemeSize;
  @Input('gtMd.airPaddingTop') gtMdAirPaddingTop: ThemeSize;
  @Input('gtLg.airPaddingTop') gtLgAirPaddingTop: ThemeSize;
  @Input('gtXs.airPaddingTop') gtXsAirPaddingTop: ThemeSize;

  @Input() airPaddingBottom: ThemeSize;
  @Input('xs.airPaddingBottom') xsAirPaddingBottom: ThemeSize;
  @Input('sm.airPaddingBottom') smAirPaddingBottom: ThemeSize;
  @Input('md.airPaddingBottom') mdAirPaddingBottom: ThemeSize;
  @Input('lg.airPaddingBottom') lgAirPaddingBottom: ThemeSize;
  @Input('xl.airPaddingBottom') xlAirPaddingBottom: ThemeSize;
  @Input('ltSm.airPaddingBottom') ltSmAirPaddingBottom: ThemeSize;
  @Input('ltMd.airPaddingBottom') ltMdAirPaddingBottom: ThemeSize;
  @Input('ltLg.airPaddingBottom') ltLgAirPaddingBottom: ThemeSize;
  @Input('ltXl.airPaddingBottom') ltXlAirPaddingBottom: ThemeSize;
  @Input('gtSm.airPaddingBottom') gtSmAirPaddingBottom: ThemeSize;
  @Input('gtMd.airPaddingBottom') gtMdAirPaddingBottom: ThemeSize;
  @Input('gtLg.airPaddingBottom') gtLgAirPaddingBottom: ThemeSize;
  @Input('gtXs.airPaddingBottom') gtXsAirPaddingBottom: ThemeSize;

  @Input() airPaddingStart: ThemeSize;
  @Input('xs.airPaddingStart') xsAirPaddingStart: ThemeSize;
  @Input('sm.airPaddingStart') smAirPaddingStart: ThemeSize;
  @Input('md.airPaddingStart') mdAirPaddingStart: ThemeSize;
  @Input('lg.airPaddingStart') lgAirPaddingStart: ThemeSize;
  @Input('xl.airPaddingStart') xlAirPaddingStart: ThemeSize;
  @Input('ltSm.airPaddingStart') ltSmAirPaddingStart: ThemeSize;
  @Input('ltMd.airPaddingStart') ltMdAirPaddingStart: ThemeSize;
  @Input('ltLg.airPaddingStart') ltLgAirPaddingStart: ThemeSize;
  @Input('ltXl.airPaddingStart') ltXlAirPaddingStart: ThemeSize;
  @Input('gtSm.airPaddingStart') gtSmAirPaddingStart: ThemeSize;
  @Input('gtMd.airPaddingStart') gtMdAirPaddingStart: ThemeSize;
  @Input('gtLg.airPaddingStart') gtLgAirPaddingStart: ThemeSize;
  @Input('gtXs.airPaddingStart') gtXsAirPaddingStart: ThemeSize;

  @Input() airPaddingEnd: ThemeSize;
  @Input('xs.airPaddingEnd') xsAirPaddingEnd: ThemeSize;
  @Input('sm.airPaddingEnd') smAirPaddingEnd: ThemeSize;
  @Input('md.airPaddingEnd') mdAirPaddingEnd: ThemeSize;
  @Input('lg.airPaddingEnd') lgAirPaddingEnd: ThemeSize;
  @Input('xl.airPaddingEnd') xlAirPaddingEnd: ThemeSize;
  @Input('ltSm.airPaddingEnd') ltSmAirPaddingEnd: ThemeSize;
  @Input('ltMd.airPaddingEnd') ltMdAirPaddingEnd: ThemeSize;
  @Input('ltLg.airPaddingEnd') ltLgAirPaddingEnd: ThemeSize;
  @Input('ltXl.airPaddingEnd') ltXlAirPaddingEnd: ThemeSize;
  @Input('gtSm.airPaddingEnd') gtSmAirPaddingEnd: ThemeSize;
  @Input('gtMd.airPaddingEnd') gtMdAirPaddingEnd: ThemeSize;
  @Input('gtLg.airPaddingEnd') gtLgAirPaddingEnd: ThemeSize;
  @Input('gtXs.airPaddingEnd') gtXsAirPaddingEnd: ThemeSize;
}
