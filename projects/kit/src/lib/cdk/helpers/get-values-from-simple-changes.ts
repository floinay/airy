import {SimpleChanges} from '@angular/core';

export function getValuesFromSimpleChanges<T>(changes: SimpleChanges): { [key: string]: T } {
  const values: { [key: string]: T } = {};

  for (const [key, value] of Object.entries(changes)) {
    values[key] = value.currentValue;
  }

  return values;
}
