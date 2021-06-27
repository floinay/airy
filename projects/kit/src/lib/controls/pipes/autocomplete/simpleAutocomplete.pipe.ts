import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'simpleAutocomplete'
})
export class SimpleAutocompletePipe implements PipeTransform {

  transform(fieldValue: string, items: string[]): string[] {
    return items.filter(i => i.toLowerCase().includes(fieldValue.toLowerCase()));
  }

}
