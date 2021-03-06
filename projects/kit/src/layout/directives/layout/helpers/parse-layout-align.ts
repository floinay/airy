import {AlignItems, JustifyContent, LayoutAlign} from '../types';

interface ParsedLayoutAlign {
  alignItems: AlignItems | JustifyContent | undefined;
  justifyContent: JustifyContent | AlignItems;
}

export function parseLayoutAlign(layoutAlign: LayoutAlign): ParsedLayoutAlign {
  // @ts-ignore
  const res = layoutAlign.split(' ');
  if (res.length === 1) {
    return {
      alignItems: undefined,
      justifyContent: res[0] as JustifyContent | AlignItems
    };
  }

  return {
    justifyContent: res[0] as JustifyContent | AlignItems,
    alignItems: res[1] as JustifyContent | AlignItems
  };
}
