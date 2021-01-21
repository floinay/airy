import {Provider} from '@angular/core';
import {PROPS_MAP, PROPS_VALUES_MAP} from '../../services/styles/styles-service.tokens';
import {BreakpointsStylesService} from '../../services/styles/breakpoints-styles.service';
import {StylesService} from '../../services/styles/styles.service';
import {ThemeSizes} from '../../core/size/size';

function indentVar(indentType: 'margin' | 'padding', size: keyof ThemeSizes, defaultValue: string): string {
  return `var(--air-${indentType}-${size}, ${defaultValue})`;
}

function indents(indent: 'margin' | 'padding'): { [K in keyof ThemeSizes | 'default']: string } {
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
    provide: PROPS_MAP,
    useValue: {
      airMarginStat: 'margin-inline-start',
      airMarginEnd: 'margin-inline-end'
    }
  },
  {
    provide: PROPS_VALUES_MAP,
    useValue: indents('padding'),
  },
  BreakpointsStylesService,
  StylesService
];

export const MARGINS_PROVIDERS: Provider[] = [
    {
      provide: PROPS_MAP,
      useValue: {
        airMarginStat: 'margin-inline-start',
        airMarginEnd: 'margin-inline-end'
      }
    },
    {
      provide: PROPS_VALUES_MAP,
      useValue: indents('margin')
    },
    BreakpointsStylesService,
    StylesService
  ]
;

