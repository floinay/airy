import {BREAKPOINTS_STYLES_PROVIDERS, CSS_PROPS_GENERATORS} from '../../../cdk';
import {Provider} from '@angular/core';

export const GRID_ITEM_PROVIDERS: Provider[] = [
    {
      provide: CSS_PROPS_GENERATORS,
      useValue: {
        gridItem: (key: string, value: string) => {
          return {
            maxWidth: `var(--grid-item-${value})`
          };
        }
      },
      multi: true
    },
    BREAKPOINTS_STYLES_PROVIDERS
  ]
;
