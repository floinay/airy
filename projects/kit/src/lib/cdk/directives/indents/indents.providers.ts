import {Provider} from '@angular/core';
import {CSS_PROPS_KEYS_MAP, CSS_PROPS_VALUES_MAP} from '../../services';
import {BREAKPOINTS_STYLES_PROVIDERS} from '../../services/styles/providers/providers';

function indentVar(indentType: 'margin' | 'padding', size: string, defaultValue: string): string {
  return `var(--${indentType}-${size}, ${defaultValue})`;
}

function indents(indent: 'margin' | 'padding'): { [key: string]: string } {
  return {
    xxs: indentVar(indent, 'xxs', '8px'),
    xs: indentVar(indent, 'xs', '12px'),
    s: indentVar(indent, 's', '16px'),
    m: indentVar(indent, 'm', '20px'),
    l: indentVar(indent, 'l', '28px'),
    xl: indentVar(indent, 'xl', '40px'),
    xxl: indentVar(indent, 'xxl', '60px'),
    default: indentVar(indent, 'm', '20px'),
  };
}


export const PADDINGS_PROVIDERS: Provider[] = [
  {
    provide: CSS_PROPS_KEYS_MAP,
    useValue: {
      paddingStart: 'padding-inline-start',
      paddingEnd: 'padding-inline-end'
    },
    multi: true
  },
  {
    provide: CSS_PROPS_VALUES_MAP,
    multi: true,
    useValue: indents('padding')
  },
  BREAKPOINTS_STYLES_PROVIDERS
];

export const MARGINS_PROVIDERS: Provider[] = [
    {
      provide: CSS_PROPS_KEYS_MAP,
      useValue: {
        marginStart: 'margin-inline-start',
        marginEnd: 'margin-inline-end'
      },
      multi: true
    },
    {
      provide: CSS_PROPS_VALUES_MAP,
      useValue: indents('margin'),
      multi: true
    },
    BREAKPOINTS_STYLES_PROVIDERS
  ]
;

