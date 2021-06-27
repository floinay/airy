import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'airReplaceString'
})
export class ReplaceStringPipe implements PipeTransform {

  transform(value: string, search: RegExp | string, replace: string = ''): string {
    return value.replace(search, replace);
  }

}
