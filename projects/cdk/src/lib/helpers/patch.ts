import {clone} from './clone';

type O = { [key: string]: any };

export function patch<T extends O>(first: T, second: Partial<T>): T {

  Object.entries(first).forEach(([key, value]) => {
    if (key in second) {
      // @ts-ignore
      first[key] = second[key];
    } else {
      // @ts-ignore
      first[key] = value;
    }
  });
  return first;
}

export function cloneAndPatch<T extends O>(first: T, second: Partial<T>): T {
  return patch(clone(first), second);
}
