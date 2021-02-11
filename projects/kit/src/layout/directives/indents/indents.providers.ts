import {Provider} from '@angular/core';
import {BREAKPOINTS_STYLES_PROVIDERS, CSS_PROPS_KEYS_MAP, CSS_PROPS_VALUES_MAP} from '../../../cdk';

function indentVar(size: string, defaultValue: string): string {
  return `var(--indent-${size}, ${defaultValue})`;
}

function indents(): { [key: string]: string } {
  return {
    xxs: indentVar('xxs', '8px'),
    xs: indentVar('xs', '12px'),
    s: indentVar('s', '16px'),
    m: indentVar('m', '20px'),
    l: indentVar('l', '28px'),
    xl: indentVar('xl', '40px'),
    xxl: indentVar('xxl', '60px'),
    default: indentVar('m', '20px'),
    none: '0'
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
    useValue: indents()
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
      useValue: indents(),
      multi: true
    },
    BREAKPOINTS_STYLES_PROVIDERS
  ]
;

