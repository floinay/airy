import {Provider} from '@angular/core';
import {
  BREAKPOINTS_STYLES_PROVIDERS,
  CSS_PROPS_GENERATORS,
  CSS_PROPS_KEYS_MAP
} from '../../../cdk';
import {parseLayoutAlign} from './helpers/parse-layout-align';
import {LayoutAlign} from './types';
import {Gap} from './types/gap';

export const LAYOUT_PROVIDERS: Provider[] = [
  {
    provide: CSS_PROPS_KEYS_MAP,
    useValue: {
      layout: 'flex-flow'
    },
    multi: true
  },
  {
    provide: CSS_PROPS_GENERATORS,
    useValue: {
      layoutAlign: (key: string, value: LayoutAlign) => {
        if (value) {
          const {alignItems, justifyContent} = parseLayoutAlign(value);

          return {
            justifyContent,
            alignItems
          };
        }

        return {};
      },
      columnGap: (key: string, value: Gap) => {
        if (value) {
          return {
            'column-gap': `var(--indent-${value})`
          };
        }

        return {
          'column-gap': `var(--gap)`
        };
      },
      rowGap: (key: string, value: Gap) => {
        if (value) {
          return {
            'row-gap': `var(--indent-${value})`
          };
        }

        return {
          'row-gap': `var(--gap)`
        };
      }
    },
    multi: true
  },
  BREAKPOINTS_STYLES_PROVIDERS
];
