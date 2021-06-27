import {GenericObject} from '../../../types/generic-object';
import {Breakpoint, BREAKPOINT_NAMES, BreakpointName} from '../../../core';
import {firstLetterToLower} from '../../../helpers';

export const purePropName = (name: string): string => {
  const bp = breakpointNameFromPropName(name);
  return firstLetterToLower(bp ? name.replace(new RegExp(bp, 'g'), '').replace('Air', '') : name.replace('air', ''));
};

export const breakpointNameFromPropName = (name: string): BreakpointName | undefined => BREAKPOINT_NAMES.find(key => name.startsWith(key));

export const breakpointFromPropName = (name: string): Breakpoint | undefined => {
  const bpName = breakpointNameFromPropName(name);
  if (bpName) {
    return Breakpoint[bpName];
  }

  return undefined;
};


export const mergeArrayOfObjects = <T>(value?: GenericObject<T>[]): GenericObject<T> => {
  let object = {};
  if (value) {
    for (const o of value) {
      object = Object.assign(object, o);
    }
  }

  return object;
};
