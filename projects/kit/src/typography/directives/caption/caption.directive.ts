import {Directive, ElementRef, Input} from '@angular/core';

const POSSIBLE_CLASSES = ['air-caption-1', 'air-caption-2', 'air-caption-3', 'air-caption-4'];

type Caption = 1 | 2 | 3 | 4 | undefined;

@Directive({
  selector: '[airCaption]'
})
export class CaptionDirective {
  @Input() set airCaption(value: Caption) {
    value = value || 1;
    this.elementRef.nativeElement.classList.remove(...POSSIBLE_CLASSES);
    this.elementRef.nativeElement.classList.add(`air-caption-${value}`);
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
  }

}
