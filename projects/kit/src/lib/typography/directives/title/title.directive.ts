import {Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {camelToKebab} from '@airy-ui/cdk';

const POSSIBLE_ATTRIBUTES = ['airH1', 'airH2', 'airH3', 'airH4', 'airH5', 'airFixedH1', 'airFixedH2', 'airFixedH3', 'airFixedH4', 'airFixedH5'];

@Directive({
  selector: '[airH1], [airH2], [airH3], [airH4], [airH5], [airFixedH1], [airFixedH2], [airFixedH3], [airFixedH4], [airFixedH5]'
})
export class TitleDirective {
  @Input() airTitleCaption: boolean | undefined | '' = false;
  @Input() airTitleDeep: boolean | undefined | '' | 'important' = false;

  @HostBinding('class.air-tp-deep')
  get deep(): boolean {
    return (this.airTitleDeep === '' || this.airTitleDeep === true || this.airTitleDeep === undefined);
  }

  @HostBinding('class.air-tp-deep-important')
  get deepImportant() {
    return this.airTitleDeep === 'important';
  }

  @HostBinding('class.air-caption')
  get isCaption(): boolean {
    return (this.airTitleCaption === '' || this.airTitleCaption || this.airTitleCaption === undefined);
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    const attribute = POSSIBLE_ATTRIBUTES.find(att => this.elementRef.nativeElement.hasAttribute(att));
    if (attribute) {
      this.elementRef.nativeElement.classList.add(camelToKebab(attribute));
    }
  }
}
