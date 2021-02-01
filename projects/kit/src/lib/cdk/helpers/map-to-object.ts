import {UnknownObject} from '../types';

export function mapToObject<T extends unknown>(map: Map<unknown, unknown>): T {
  const object: UnknownObject = {};
  for (const [key, value] of map.entries()) {
    object[key as string] = value;
  }

  return object as T;
}
