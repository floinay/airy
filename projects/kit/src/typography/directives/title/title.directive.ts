import {Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {camelToKebab} from '../../../cdk';

const POSSIBLE_ATTRIBUTES = ['airH1', 'airH2', 'airH3', 'airH4'];

@Directive({
  selector: '[airH1], [airH2], [airH3], [airH4]'
})
export class TitleDirective {
  @Input() caption: boolean | '' = false;

  @HostBinding('class.air-caption')
  get isCaption(): boolean {
    return (this.caption === '' || this.caption);
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    const attribute = POSSIBLE_ATTRIBUTES.find(att => this.elementRef.nativeElement.hasAttribute(att));
    if (attribute) {
      this.elementRef.nativeElement.classList.add(camelToKebab(attribute));
    }
  }
}
