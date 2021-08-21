import {Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {camelToKebab} from '@airy-ui/cdk';

const POSSIBLE_ATTRIBUTES = ['airText1', 'airText2', 'airText3', 'airFixedText1', 'airFixedText2', 'airFixedText3'];

@Directive({
  selector: '[airText1], [airText2], [airText3], [airFixedText1], [airFixedText2], [airFixedText3]'
})
export class TextDirective {
  @Input() airTextCaption: boolean | '' = false;
  @Input() airTextDeep: boolean | '' | 'important' = false;

  @HostBinding('class.air-tp-deep')
  get deep(): boolean {
    return (this.airTextDeep === '' || this.airTextDeep === true);
  }

  @HostBinding('class.air-tp-deep-important')
  get deepImportant() {
    return this.airTextDeep === 'important';
  }

  @HostBinding('class.air-caption')
  get isCaption(): boolean {
    return (this.airTextCaption === '' || this.airTextCaption);
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    const attribute = POSSIBLE_ATTRIBUTES.find(att => this.elementRef.nativeElement.hasAttribute(att));
    if (attribute) {
      this.elementRef.nativeElement.classList.add(camelToKebab(attribute));
    }
  }

}
