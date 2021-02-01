import {ParsedDeletedBreakpointsProps} from '../types/parsed-deleted-breakpoints-props';
import {CssPropName} from '../types/css-prop.name';

export function parsedDeletedBreakpointsPropsFactory(): ParsedDeletedBreakpointsProps {
  return {propsByBreakpoints: new Map<string, CssPropName[]>(), props: []};
}

