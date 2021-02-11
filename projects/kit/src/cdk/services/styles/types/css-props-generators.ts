
import {CssProps} from './css-props';

export type CssPropsGeneratorsCallback = (key: string, value: unknown) => CssProps;

export type CssPropsGenerators = { [key: string]: CssPropsGeneratorsCallback };
