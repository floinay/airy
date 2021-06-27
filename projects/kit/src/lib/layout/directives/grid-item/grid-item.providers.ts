import {Provider} from '@angular/core';
import {breakpointsStylesProviders} from '@airy-ui/cdk';
import {StringObject} from '../../../../../../cdk/src/lib';

export const GRID_ITEM_PROVIDERS: Provider[] = breakpointsStylesProviders({
  stylesFactories: {
    gridItem: (value: string): StringObject => {
      return value ? {maxWidth: `var(--grid-item-${value})`} : {};
    },
    filledGridItem: (value: string): StringObject => {
      return value ? {maxWidth: `var(--filled-grid-item-${value})`} : {};
    },
    fixedGridItem: (value: string): StringObject => {
      return value ? {maxWidth: `var(--fixed-grid-item-${value})`} : {};
    }
  }
})
