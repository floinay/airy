import {SimpleChanges} from '@angular/core';

export function getValuesFromSimpleChanges<T>(changes: SimpleChanges, ignore?: string[]): { [key: string]: T } {
  const values: { [key: string]: T } = {};

  for (const [key, value] of Object.entries(changes)) {
    if (ignore?.includes(key)) {
      continue;
    }

    values[key] = value.currentValue;
  }

  return values;
}
