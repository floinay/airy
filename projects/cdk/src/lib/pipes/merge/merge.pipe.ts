import {Pipe, PipeTransform} from '@angular/core';
import {DeepPartial} from '../../types/deep-partial';
import {cloneDeepAndMerge} from '../../helpers/clone-deep-and-merge';

@Pipe({
  name: 'airMerge'
})
export class MergePipe implements PipeTransform {

  // tslint:disable-next-line:ban-types
  transform<T extends Object>(original: T, merge: Partial<T> | DeepPartial<T>): T {
    return cloneDeepAndMerge(original, merge);
  }

}
