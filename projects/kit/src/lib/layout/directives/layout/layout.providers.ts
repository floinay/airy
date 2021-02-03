import {Provider} from '@angular/core';
import {CSS_PROPS_KEYS_MAP} from '../../../cdk';
import {CHANGES_STATE_IGNORED_KEYS} from '../../../cdk/services/changes-state/changes-tokens';
import {BREAKPOINTS_STYLES_PROVIDERS} from '../../../cdk/services/styles/providers/providers';

export const LAYOUT_PROVIDERS: Provider[] = [
  {
    provide: CHANGES_STATE_IGNORED_KEYS,
    useValue: [
      'airLayout'
    ]
  },
  {
    provide: CSS_PROPS_KEYS_MAP,
    useValue: {
      airLayout: 'flex-direction'
    },
    multi: true
  },
  BREAKPOINTS_STYLES_PROVIDERS
];
