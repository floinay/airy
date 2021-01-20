import {Directive, Injector, Input} from '@angular/core';
import {ThemeSizes} from 'cdk';
import {PROPS_MAP, PROPS_VALUES_MAP} from '../../styles/styles-manager.tokens';
import {CDK_MODULE_OPTIONS} from '../../options/cdk-module-options.provider';
import {BreakpointsStylesManager} from '../../styles/breakpoints-styles.manager';
import {StylesManager} from '../../styles/styles.manager';
import {AbstractIndentsDirective} from './abstract-indents-directive';

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
        return injector.get(CDK_MODULE_OPTIONS).margins;
      },
      deps: [Injector]
    },
    BreakpointsStylesManager,
    StylesManager
  ]
})
export class MarginsDirective extends AbstractIndentsDirective {
  @Input() airMargin: ThemeSizes;
  @Input('xs.airMargin') xsAirMargin: ThemeSizes;
  @Input('sm.airMargin') smAirMargin: ThemeSizes;
  @Input('md.airMargin') mdAirMargin: ThemeSizes;
  @Input('lg.airMargin') lgAirMargin: ThemeSizes;
  @Input('xl.airMargin') xlAirMargin: ThemeSizes;
  @Input('ltSm.airMargin') ltSmAirMargin: ThemeSizes;
  @Input('ltMd.airMargin') ltMdAirMargin: ThemeSizes;
  @Input('ltLg.airMargin') ltLgAirMargin: ThemeSizes;
  @Input('ltXl.airMargin') ltXlAirMargin: ThemeSizes;
  @Input('gtSm.airMargin') gtSmAirMargin: ThemeSizes;
  @Input('gtMd.airMargin') gtMdAirMargin: ThemeSizes;
  @Input('gtLg.airMargin') gtLgAirMargin: ThemeSizes;
  @Input('gtXs.airMargin') gtXsAirMargin: ThemeSizes;

  @Input() airMarginTop: ThemeSizes;
  @Input('xs.airMarginTop') xsAirMarginTop: ThemeSizes;
  @Input('sm.airMarginTop') smAirMarginTop: ThemeSizes;
  @Input('md.airMarginTop') mdAirMarginTop: ThemeSizes;
  @Input('lg.airMarginTop') lgAirMarginTop: ThemeSizes;
  @Input('xl.airMarginTop') xlAirMarginTop: ThemeSizes;
  @Input('ltSm.airMarginTop') ltSmAirMarginTop: ThemeSizes;
  @Input('ltMd.airMarginTop') ltMdAirMarginTop: ThemeSizes;
  @Input('ltLg.airMarginTop') ltLgAirMarginTop: ThemeSizes;
  @Input('ltXl.airMarginTop') ltXlAirMarginTop: ThemeSizes;
  @Input('gtSm.airMarginTop') gtSmAirMarginTop: ThemeSizes;
  @Input('gtMd.airMarginTop') gtMdAirMarginTop: ThemeSizes;
  @Input('gtLg.airMarginTop') gtLgAirMarginTop: ThemeSizes;
  @Input('gtXs.airMarginTop') gtXsAirMarginTop: ThemeSizes;

  @Input() airMarginBottom: ThemeSizes;
  @Input('xs.airMarginBottom') xsAirMarginBottom: ThemeSizes;
  @Input('sm.airMarginBottom') smAirMarginBottom: ThemeSizes;
  @Input('md.airMarginBottom') mdAirMarginBottom: ThemeSizes;
  @Input('lg.airMarginBottom') lgAirMarginBottom: ThemeSizes;
  @Input('xl.airMarginBottom') xlAirMarginBottom: ThemeSizes;
  @Input('ltSm.airMarginBottom') ltSmAirMarginBottom: ThemeSizes;
  @Input('ltMd.airMarginBottom') ltMdAirMarginBottom: ThemeSizes;
  @Input('ltLg.airMarginBottom') ltLgAirMarginBottom: ThemeSizes;
  @Input('ltXl.airMarginBottom') ltXlAirMarginBottom: ThemeSizes;
  @Input('gtSm.airMarginBottom') gtSmAirMarginBottom: ThemeSizes;
  @Input('gtMd.airMarginBottom') gtMdAirMarginBottom: ThemeSizes;
  @Input('gtLg.airMarginBottom') gtLgAirMarginBottom: ThemeSizes;
  @Input('gtXs.airMarginBottom') gtXsAirMarginBottom: ThemeSizes;

  @Input() airMarginStart: ThemeSizes;
  @Input('xs.airMarginStart') xsAirMarginStart: ThemeSizes;
  @Input('sm.airMarginStart') smAirMarginStart: ThemeSizes;
  @Input('md.airMarginStart') mdAirMarginStart: ThemeSizes;
  @Input('lg.airMarginStart') lgAirMarginStart: ThemeSizes;
  @Input('xl.airMarginStart') xlAirMarginStart: ThemeSizes;
  @Input('ltSm.airMarginStart') ltSmAirMarginStart: ThemeSizes;
  @Input('ltMd.airMarginStart') ltMdAirMarginStart: ThemeSizes;
  @Input('ltLg.airMarginStart') ltLgAirMarginStart: ThemeSizes;
  @Input('ltXl.airMarginStart') ltXlAirMarginStart: ThemeSizes;
  @Input('gtSm.airMarginStart') gtSmAirMarginStart: ThemeSizes;
  @Input('gtMd.airMarginStart') gtMdAirMarginStart: ThemeSizes;
  @Input('gtLg.airMarginStart') gtLgAirMarginStart: ThemeSizes;
  @Input('gtXs.airMarginStart') gtXsAirMarginStart: ThemeSizes;

  @Input() airMarginEnd: ThemeSizes;
  @Input('xs.airMarginEnd') xsAirMarginEnd: ThemeSizes;
  @Input('sm.airMarginEnd') smAirMarginEnd: ThemeSizes;
  @Input('md.airMarginEnd') mdAirMarginEnd: ThemeSizes;
  @Input('lg.airMarginEnd') lgAirMarginEnd: ThemeSizes;
  @Input('xl.airMarginEnd') xlAirMarginEnd: ThemeSizes;
  @Input('ltSm.airMarginEnd') ltSmAirMarginEnd: ThemeSizes;
  @Input('ltMd.airMarginEnd') ltMdAirMarginEnd: ThemeSizes;
  @Input('ltLg.airMarginEnd') ltLgAirMarginEnd: ThemeSizes;
  @Input('ltXl.airMarginEnd') ltXlAirMarginEnd: ThemeSizes;
  @Input('gtSm.airMarginEnd') gtSmAirMarginEnd: ThemeSizes;
  @Input('gtMd.airMarginEnd') gtMdAirMarginEnd: ThemeSizes;
  @Input('gtLg.airMarginEnd') gtLgAirMarginEnd: ThemeSizes;
  @Input('gtXs.airMarginEnd') gtXsAirMarginEnd: ThemeSizes;
}
