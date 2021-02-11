import {Directive, ElementRef} from '@angular/core';

const POSSIBLE_ATTRIBUTES = ['airH1', 'airH2', 'airH3', 'airH4', 'airH5', 'airH6', 'airH7'];

@Directive({
  selector: '[airH1], [airH2], [airH3], [airH4], [airH5], [airH6], [airH7]'
})
export class TitleDirective {
  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    const attribute = POSSIBLE_ATTRIBUTES.find(att => this.elementRef.nativeElement.hasAttribute(att));
    if (attribute) {
      this.elementRef.nativeElement.classList.add(`air-h${this.size(attribute)}`);
    }
  }

  private size(attribute: string): number {
    return Number(attribute.split('airH')[1]);
  }
}
