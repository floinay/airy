import {ParsedDeletedBreakpointsProps} from '../types';
import {CssPropName} from '../types';

export function parsedDeletedBreakpointsPropsFactory(): ParsedDeletedBreakpointsProps {
  return {propsByBreakpoints: new Map<string, CssPropName[]>(), props: []};
}

