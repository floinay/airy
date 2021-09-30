import {Provider} from '@angular/core';
import {breakpointsStylesProviders} from '@airy-ui/cdk';
import {indentVar} from './helpers/indent-var';


export const PADDINGS_PROVIDERS: Provider[] = breakpointsStylesProviders({
  stylesFactories: {
    paddingVertical: (value: string) => ({
      paddingTop: indentVar(value),
      paddingBottom: indentVar(value)
    }),
    paddingHorizontal: (value: string) => ({
      paddingInlineStart: indentVar(value),
      paddingInlineEnd: indentVar(value)
    }),
    padding: (value: string) => ({padding: indentVar(value)}),
    paddingStart: (value) => ({'padding-inline-start': indentVar(value)}),
    paddingEnd: (value) => ({'padding-inline-end': indentVar(value)}),
    paddingTop: (value) => ({'padding-top': indentVar(value)}),
    paddingBottom: (value) => ({'padding-bottom': indentVar(value)})
  }
});

export const MARGINS_PROVIDERS: Provider[] = breakpointsStylesProviders({
  stylesFactories: {
    marginVertical: (value: string) => ({
      marginTop: indentVar(value),
      marginBottom: indentVar(value)
    }),
    marginHorizontal: (value: string) => ({
      marginInlineStart: indentVar(value),
      marginInlineEnd: indentVar(value)
    }),
    margin: (value: string) => ({margin: indentVar(value)}),
    marginStart: (value) => ({'margin-inline-start': indentVar(value)}),
    marginEnd: (value) => ({'margin-inline-end': indentVar(value)}),
    marginTop: (value) => ({'margin-top': indentVar(value)}),
    marginBottom: (value) => ({'margin-bottom': indentVar(value)})
  }
})


