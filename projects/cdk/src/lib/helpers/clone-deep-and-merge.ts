import {DeepPartial} from '../types/deep-partial';
import {cloneDeep, merge} from 'lodash-es';

export function cloneDeepAndMerge<T extends {}>(obj: T, newValues: DeepPartial<T>): T {
  return merge(cloneDeep(obj), newValues);
}
