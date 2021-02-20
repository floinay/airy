import {Directive, ElementRef} from '@angular/core';
import {camelToKebab} from '../../../cdk';

const POSSIBLE_ATTRIBUTES = ['airText1', 'airText2'];

@Directive({
  selector: '[airText1], [airText2]'
})
export class TextDirective {
  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    const attribute = POSSIBLE_ATTRIBUTES.find(att => this.elementRef.nativeElement.hasAttribute(att));
    if (attribute) {
      this.elementRef.nativeElement.classList.add(camelToKebab(attribute));
    }
  }

}
