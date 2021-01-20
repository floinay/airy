import {Directive, Injector, Input} from '@angular/core';
import {ThemeSizes} from '@airy-ui/cdk';
import {PROPS_MAP, PROPS_VALUES_MAP} from '../../styles/styles-manager.tokens';
import {CDK_MODULE_OPTIONS} from '../../options/cdk-module-options.provider';
import {BreakpointsStylesManager} from '../../styles/breakpoints-styles.manager';
import {StylesManager} from '../../styles/styles.manager';
import {AbstractIndentsDirective} from './abstract-indents-directive';

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
  providers: [
    {
      provide: PROPS_MAP,
      useValue: {
        airMarginStat: 'margin-inline-start',
        airMarginEnd: 'margin-inline-end'
      }
    },
    {
      provide: PROPS_VALUES_MAP,
      useFactory: (injector: Injector) => {
        return injector.get(CDK_MODULE_OPTIONS).paddings;
      },
      deps: [Injector]
    },
    BreakpointsStylesManager,
    StylesManager
  ]
})
export class PaddingsDirective extends AbstractIndentsDirective {
  @Input() airPadding: ThemeSizes;
  @Input('xs.airPadding') xsAirPadding: ThemeSizes;
  @Input('sm.airPadding') smAirPadding: ThemeSizes;
  @Input('md.airPadding') mdAirPadding: ThemeSizes;
  @Input('lg.airPadding') lgAirPadding: ThemeSizes;
  @Input('xl.airPadding') xlAirPadding: ThemeSizes;
  @Input('ltSm.airPadding') ltSmAirPadding: ThemeSizes;
  @Input('ltMd.airPadding') ltMdAirPadding: ThemeSizes;
  @Input('ltLg.airPadding') ltLgAirPadding: ThemeSizes;
  @Input('ltXl.airPadding') ltXlAirPadding: ThemeSizes;
  @Input('gtSm.airPadding') gtSmAirPadding: ThemeSizes;
  @Input('gtMd.airPadding') gtMdAirPadding: ThemeSizes;
  @Input('gtLg.airPadding') gtLgAirPadding: ThemeSizes;
  @Input('gtXs.airPadding') gtXsAirPadding: ThemeSizes;

  @Input() airPaddingTop: ThemeSizes;
  @Input('xs.airPaddingTop') xsAirPaddingTop: ThemeSizes;
  @Input('sm.airPaddingTop') smAirPaddingTop: ThemeSizes;
  @Input('md.airPaddingTop') mdAirPaddingTop: ThemeSizes;
  @Input('lg.airPaddingTop') lgAirPaddingTop: ThemeSizes;
  @Input('xl.airPaddingTop') xlAirPaddingTop: ThemeSizes;
  @Input('ltSm.airPaddingTop') ltSmAirPaddingTop: ThemeSizes;
  @Input('ltMd.airPaddingTop') ltMdAirPaddingTop: ThemeSizes;
  @Input('ltLg.airPaddingTop') ltLgAirPaddingTop: ThemeSizes;
  @Input('ltXl.airPaddingTop') ltXlAirPaddingTop: ThemeSizes;
  @Input('gtSm.airPaddingTop') gtSmAirPaddingTop: ThemeSizes;
  @Input('gtMd.airPaddingTop') gtMdAirPaddingTop: ThemeSizes;
  @Input('gtLg.airPaddingTop') gtLgAirPaddingTop: ThemeSizes;
  @Input('gtXs.airPaddingTop') gtXsAirPaddingTop: ThemeSizes;

  @Input() airPaddingBottom: ThemeSizes;
  @Input('xs.airPaddingBottom') xsAirPaddingBottom: ThemeSizes;
  @Input('sm.airPaddingBottom') smAirPaddingBottom: ThemeSizes;
  @Input('md.airPaddingBottom') mdAirPaddingBottom: ThemeSizes;
  @Input('lg.airPaddingBottom') lgAirPaddingBottom: ThemeSizes;
  @Input('xl.airPaddingBottom') xlAirPaddingBottom: ThemeSizes;
  @Input('ltSm.airPaddingBottom') ltSmAirPaddingBottom: ThemeSizes;
  @Input('ltMd.airPaddingBottom') ltMdAirPaddingBottom: ThemeSizes;
  @Input('ltLg.airPaddingBottom') ltLgAirPaddingBottom: ThemeSizes;
  @Input('ltXl.airPaddingBottom') ltXlAirPaddingBottom: ThemeSizes;
  @Input('gtSm.airPaddingBottom') gtSmAirPaddingBottom: ThemeSizes;
  @Input('gtMd.airPaddingBottom') gtMdAirPaddingBottom: ThemeSizes;
  @Input('gtLg.airPaddingBottom') gtLgAirPaddingBottom: ThemeSizes;
  @Input('gtXs.airPaddingBottom') gtXsAirPaddingBottom: ThemeSizes;

  @Input() airPaddingStart: ThemeSizes;
  @Input('xs.airPaddingStart') xsAirPaddingStart: ThemeSizes;
  @Input('sm.airPaddingStart') smAirPaddingStart: ThemeSizes;
  @Input('md.airPaddingStart') mdAirPaddingStart: ThemeSizes;
  @Input('lg.airPaddingStart') lgAirPaddingStart: ThemeSizes;
  @Input('xl.airPaddingStart') xlAirPaddingStart: ThemeSizes;
  @Input('ltSm.airPaddingStart') ltSmAirPaddingStart: ThemeSizes;
  @Input('ltMd.airPaddingStart') ltMdAirPaddingStart: ThemeSizes;
  @Input('ltLg.airPaddingStart') ltLgAirPaddingStart: ThemeSizes;
  @Input('ltXl.airPaddingStart') ltXlAirPaddingStart: ThemeSizes;
  @Input('gtSm.airPaddingStart') gtSmAirPaddingStart: ThemeSizes;
  @Input('gtMd.airPaddingStart') gtMdAirPaddingStart: ThemeSizes;
  @Input('gtLg.airPaddingStart') gtLgAirPaddingStart: ThemeSizes;
  @Input('gtXs.airPaddingStart') gtXsAirPaddingStart: ThemeSizes;

  @Input() airPaddingEnd: ThemeSizes;
  @Input('xs.airPaddingEnd') xsAirPaddingEnd: ThemeSizes;
  @Input('sm.airPaddingEnd') smAirPaddingEnd: ThemeSizes;
  @Input('md.airPaddingEnd') mdAirPaddingEnd: ThemeSizes;
  @Input('lg.airPaddingEnd') lgAirPaddingEnd: ThemeSizes;
  @Input('xl.airPaddingEnd') xlAirPaddingEnd: ThemeSizes;
  @Input('ltSm.airPaddingEnd') ltSmAirPaddingEnd: ThemeSizes;
  @Input('ltMd.airPaddingEnd') ltMdAirPaddingEnd: ThemeSizes;
  @Input('ltLg.airPaddingEnd') ltLgAirPaddingEnd: ThemeSizes;
  @Input('ltXl.airPaddingEnd') ltXlAirPaddingEnd: ThemeSizes;
  @Input('gtSm.airPaddingEnd') gtSmAirPaddingEnd: ThemeSizes;
  @Input('gtMd.airPaddingEnd') gtMdAirPaddingEnd: ThemeSizes;
  @Input('gtLg.airPaddingEnd') gtLgAirPaddingEnd: ThemeSizes;
  @Input('gtXs.airPaddingEnd') gtXsAirPaddingEnd: ThemeSizes;
}
