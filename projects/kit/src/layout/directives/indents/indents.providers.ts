import {Provider} from '@angular/core';
import {
  BREAKPOINTS_STYLES_PROVIDERS,
  CSS_PROPS_GENERATORS,
  CSS_PROPS_KEYS_MAP,
  CSS_PROPS_VALUES_MAP
} from '../../../cdk';

const DEFAULT_VALUES_MAP = {
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '20px',
  l: '28px',
  xl: '40px',
  xxl: '60px',
  none: '0',
  default: '20px'
};

function indentVar(size: keyof typeof DEFAULT_VALUES_MAP): string {
  const defaultValue = DEFAULT_VALUES_MAP[size];
  if (size === 'none') {
    return '0';
  }
  if (size === 'default') {
    size = 'm';
  }
  return `var(--indent-${size}, ${defaultValue})`;
}

function indents(): { [key: string]: string } {
  return {
    xxs: indentVar('xxs'),
    xs: indentVar('xs'),
    s: indentVar('s'),
    m: indentVar('m'),
    l: indentVar('l'),
    xl: indentVar('xl'),
    xxl: indentVar('xxl'),
    default: indentVar('m'),
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
  {
    provide: CSS_PROPS_GENERATORS,
    useValue: {
      paddingVertical: (key: string, value: keyof typeof DEFAULT_VALUES_MAP) => {
        return {
          paddingTop: indentVar(value),
          paddingBottom: indentVar(value)
        };
      },
      paddingHorizontal: (key: string, value: keyof typeof DEFAULT_VALUES_MAP) => {
        return {
          paddingInlineStart: indentVar(value),
          paddingInlineEnd: indentVar(value)
        };
      }
    },
    multi: true
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
  {
    provide: CSS_PROPS_GENERATORS,
    useValue: {
      marginVertical: (key: string, value: keyof typeof DEFAULT_VALUES_MAP) => {
        return {
          marginTop: indentVar(value),
          marginBottom: indentVar(value)
        };
      },
      marginHorizontal: (key: string, value: keyof typeof DEFAULT_VALUES_MAP) => {
        return {
          marginInlineStart: indentVar(value),
          marginInlineEnd: indentVar(value)
        };
      }
    },
    multi: true
  },
  BREAKPOINTS_STYLES_PROVIDERS
];



