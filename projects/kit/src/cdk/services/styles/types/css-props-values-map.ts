import {CssPropValue} from './css-prop.value';

type CallbackFunction = (key: string, value: CssPropValue) => string | string[];

export type CssPropsValuesMap = { [key: string]: string | CallbackFunction };
