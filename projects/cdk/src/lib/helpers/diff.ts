import {isPlainObject, reduce} from 'lodash-es';


export type DiffObject = Array<unknown> | {
  [key: string]: unknown;
};

export function diff(first: DiffObject, second: DiffObject): boolean {
  if (isArraysAndLengthNotEqual(first, second)) {
    return false;
  }
  return !!Object.keys(reduce(first, (result, value, key) => {
    if (isPlainObject(value)) {
      // @ts-ignore
      result[key] = diff(value, second[key]);
    } else { // @ts-ignore
      if (!isEqual(value, second[key])) {
        // @ts-ignore
        result[key] = value;
      }
    }
    return result;
  }, {})).length;
}


function isArrays(first: DiffObject, second: DiffObject): boolean {
  return first instanceof Array && second instanceof Array;
}

function isLengthNotEqual(first: Array<unknown>, second: Array<unknown>): boolean {
  return first.length !== second.length;
}

function isArraysAndLengthNotEqual(first: DiffObject, second: DiffObject): boolean {
  return isArrays(first, second) && isLengthNotEqual(first as Array<unknown>, second as Array<unknown>);
}
