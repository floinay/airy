import {Inject, Injectable} from '@angular/core';
import {AbstractOptionsService} from '@airy-ui/cdk';
import {LayoutModuleOptions} from '../options/layout-module.options';
import {LAYOUT_MODULE_OPTIONS} from '../options/layout-module.options.provider';

@Injectable()
export class OptionsService extends AbstractOptionsService<LayoutModuleOptions> {
  defaultOptions = {
    selectHeader: [],
    selectFooter: []
  };

  constructor(@Inject(LAYOUT_MODULE_OPTIONS) readonly options: LayoutModuleOptions) {
    super();
  }
}
