import {Injector, Provider} from '@angular/core';
import {parseLayoutAlign} from './helpers/parse-layout-align';
import {LayoutAlign} from './types';
import {Gap} from './types/gap';
import {
  breakpointsStylesProviders,
  GenericObject,
  StringObject,
  StylesFactory,
  StylesProvidersFactory
} from '@airy-ui/cdk';
import {purePropName} from '@airy-ui/cdk';


const stylesFactories: StylesProvidersFactory = (injector: Injector): GenericObject<StylesFactory> => {
  return {
    layoutAlign: (value: LayoutAlign): StringObject => {
      if (value) {
        const {alignItems, justifyContent} = parseLayoutAlign(value);

        return {
          justifyContent,
          alignItems
        };
      }

      return {};
    },
    colGap: (value: Gap): StringObject => {
      return {
        'column-gap': `var(--indent-${value}, 0)`,
        '--col-gap': `var(--indent-${value}, 0)`
      };
    },
    rowGap: (value: Gap): StringObject => {
      return {
        'row-gap': `var(--indent-${value}, 0)`
      };
    },
    colCount: (value: number, map: Map<string, string>) => {
      const gapKey = Array.from(map.keys()).find(key => purePropName(key) === 'colGap');
      if (value && gapKey) {
        const gap = 'var(--indent-' + map.get(gapKey) + ')';
        return {
          '--col-width': `calc((100% - (${gap} * ${value - 1})) / ${value})`
        }
      }
      return {
        '--col-width': `calc(100% / ${value})`
      };
    }
  };
}

export const LAYOUT_PROVIDERS: Provider[] = breakpointsStylesProviders({
  stylesNamesMap: {
    layout: 'flex-flow'
  },
  stylesFactories,
  classesMap: {
    colCount: ['air-cc'],
    colGap: ['air-cg']
  }
});
