import {AlignItems, JustifyContent, LayoutAlign} from '../types';

interface ParsedLayoutAlign {
  alignItems: string;
  justifyContent: string;
}

export function parseLayoutAlign(layoutAlign: LayoutAlign): ParsedLayoutAlign {
  // @ts-ignore
  const res = layoutAlign.split(' ');
  if (res.length === 1) {
    return {
      alignItems: '',
      justifyContent: prop(res[0])
    };
  }

  return {
    justifyContent: prop(res[0]),
    alignItems: prop(res[1])
  };
}

function prop(prop: string): string {
  if (prop === 'start') {
    return 'flex-start';
  }
  if (prop === 'end') {
    return 'flex-end';
  }

  return prop;
}
