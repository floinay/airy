import {Directive, Inject, OnChanges, SimpleChanges} from '@angular/core';
import {IndentsService} from './indents.service';
import {AbstractIndentsDirective} from './abstract-indents-directive';
import {BreakpointsStylesManager} from '../../breakpoints/styles/breakpoints-styles.manager';
import {PROP_NAMES_MAP} from './static/properties.map';
import {CDK_MODULE_OPTIONS} from '../../options/cdk-module-options.provider';
import {CdkModuleOptions} from '../../options/cdk-module.options';

@Directive({
  selector: '[airPadding], [airPaddingTop], [airPaddingBottom],  [airPaddingStart], [airPaddingEnd], [airMargin], [airMarginStart], [airMarginEnd], [airMarginTop], [airMarginBottom]',
  providers: [IndentsService, BreakpointsStylesManager],
})
export class IndentsDirective extends AbstractIndentsDirective implements OnChanges {

  constructor(private bpStylesManager: BreakpointsStylesManager, @Inject(CDK_MODULE_OPTIONS) options: CdkModuleOptions) {
    super();
    bpStylesManager.setStylesMap(Object.assign(options.paddings, {undefined: options.paddings.default}));
    bpStylesManager.setPropertiesMap(PROP_NAMES_MAP);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bpStylesManager.onChanges(changes);
  }

}
