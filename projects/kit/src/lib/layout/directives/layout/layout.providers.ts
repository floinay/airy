import {Provider} from '@angular/core';
import {CSS_PROPS_GENERATORS, CSS_PROPS_KEYS_MAP} from '../../../cdk';
import {CHANGES_STATE_IGNORED_KEYS} from '../../../cdk/services/changes-state/changes-tokens';
import {BREAKPOINTS_STYLES_PROVIDERS} from '../../../cdk/services/styles/providers/providers';
import {parseLayoutAlign} from './helpers/parse-layout-align';
import {LayoutAlign} from './types';

export const LAYOUT_PROVIDERS: Provider[] = [
  {
    provide: CHANGES_STATE_IGNORED_KEYS,
    useValue: [
      'airLayout'
    ],
    multi: true
  },
  {
    provide: CSS_PROPS_KEYS_MAP,
    useValue: {
      layout: 'flex-direction'
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
      }
    },
    multi: true
  },
  BREAKPOINTS_STYLES_PROVIDERS
];
