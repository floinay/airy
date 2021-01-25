import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

type Text = 1 | 2 | 3 | 4;
const POSSIBLE_CLASSES = ['air-text-1', 'air-text-2', 'air-text-3', 'air-text-4'];

@Directive({
  selector: '[airText]'
})
export class TextDirective {
  @HostBinding('class.air-text-1')
  private defaultText = true;

  @Input() set airText(value: TextDirective) {
    this.airText.elementRef.nativeElement.classList.remove(POSSIBLE_CLASSES);
    this.airText.elementRef.nativeElement.classList.add(`air-text-${value}`);
    this.defaultText = false;
  }

  constructor(private elementRef: ElementRef) {

  }

}
