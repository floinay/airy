import {CssPropName} from './css-prop.name';

export interface ParsedDeletedBreakpointsProps {
  props: CssPropName[];
  propsByBreakpoints: Map<string, CssPropName[]>;
}
