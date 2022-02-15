import {Pipe, PipeTransform} from '@angular/core';

type Replaces = { [key: string]: string };

@Pipe({
  name: 'airReplaceVars'
})
export class ReplaceVarsPipe implements PipeTransform {

  transform(str: string, replaces: Replaces): string {
    return Object.entries(replaces).reduce((accum, [key, value]) => {
      return accum.replace(new RegExp('{{' + key + '}}', 'g'), value as string);
    }, str);
  }

}
