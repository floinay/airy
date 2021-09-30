import {DEFAULT_VALUES_MAP} from './indents.providers';

export const singleIndentVar = (indent: keyof typeof DEFAULT_VALUES_MAP): string => `var(--indent-${indent}, ${DEFAULT_VALUES_MAP[indent]})`;
