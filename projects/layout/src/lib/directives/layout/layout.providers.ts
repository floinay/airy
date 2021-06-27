import {ElementRef, Injector, Provider} from '@angular/core';
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
import {Platform} from '@angular/cdk/platform';
import {WINDOW} from '@ng-web-apis/common';
import {ColGapPolyfillService} from './polyfill/col-gap-polyfill.service';
import {RowGapPolyfillService} from './polyfill/row-gap-polyfill.service';

const stylesFactories: StylesProvidersFactory = (injector: Injector): GenericObject<StylesFactory> => {
  const colGapPolyfill = injector.get(ColGapPolyfillService);
  const rowGapPolyfill = injector.get(RowGapPolyfillService);
  const ref = injector.get(ElementRef) as ElementRef<HTMLDivElement>;
  const platform = injector.get(Platform);
  const window = injector.get(WINDOW);
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
      if (platform.SAFARI || platform.IOS) {
        colGapPolyfill.enable(ref.nativeElement);
        return {
          '--col-gap': `var(--indent-${value}, 0)`
        };
      }

      return {
        'column-gap': `var(--indent-${value}, 0)`,
        '--col-gap': `var(--indent-${value}, 0)`
      };
    },
    rowGap: (value: Gap): StringObject => {
      if (platform.SAFARI || platform.IOS) {
        rowGapPolyfill.enable(ref.nativeElement);
        return {
          '--row-gap': `var(--indent-${value}, 0)`
        };
      }
      return {
        'row-gap': `var(--indent-${value}, 0)`
      };
    },
    colCount: (value: number) => {
      const styles = window.getComputedStyle(ref.nativeElement);
      const gap = styles.getPropertyValue('--col-gap');
      if (value) {
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
