import {Provider} from '@angular/core';
import {breakpointsStylesProviders} from '@airy-ui/cdk/services/styles';

const DEFAULT_VALUES_MAP = {
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '20px',
  l: '28px',
  xl: '40px',
  xxl: '60px',
  none: '0',
  default: '20px',
  auto: 'auto'
};

function indentVar(size: keyof typeof DEFAULT_VALUES_MAP, negative = false): string {
  const defaultValue = DEFAULT_VALUES_MAP[size];
  if (size === 'none') {
    return '0';
  }
  if (size === 'default') {
    size = 'm';
  }

  if (size === 'auto') {
    return 'auto';
  }

  if (negative) {
    return `calc(-1 * var(--indent-${size}))`;
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
    '-xxs': indentVar('xxs', true),
    '-xs': indentVar('xs', true),
    '-s': indentVar('s', true),
    '-m': indentVar('m', true),
    '-l': indentVar('l', true),
    '-xl': indentVar('xl', true),
    '-xxl': indentVar('xxl', true),
    default: indentVar('m'),
    none: '0'
  };
}

export const PADDINGS_PROVIDERS: Provider[] = breakpointsStylesProviders({
  stylesNamesMap: {
    paddingStart: 'padding-inline-start',
    paddingEnd: 'padding-inline-end'
  },
  stylesValuesMap: indents(),
  stylesFactories: {
    paddingVertical: (value: keyof typeof DEFAULT_VALUES_MAP) => {
      return {
        paddingTop: indentVar(value),
        paddingBottom: indentVar(value)
      };
    },
    paddingHorizontal: (value: keyof typeof DEFAULT_VALUES_MAP) => {
      return {
        paddingInlineStart: indentVar(value),
        paddingInlineEnd: indentVar(value)
      };
    }
  }
});

export const MARGINS_PROVIDERS: Provider[] = breakpointsStylesProviders({
  stylesNamesMap: {
    marginStart: 'margin-inline-start',
    marginEnd: 'margin-inline-end'
  },
  stylesValuesMap: indents(),
  stylesFactories: {
    marginVertical: (value: keyof typeof DEFAULT_VALUES_MAP) => {
      return {
        marginTop: indentVar(value),
        marginBottom: indentVar(value)
      };
    },
    marginHorizontal: (value: keyof typeof DEFAULT_VALUES_MAP) => {
      return {
        marginInlineStart: indentVar(value),
        marginInlineEnd: indentVar(value)
      };
    }
  }
})


