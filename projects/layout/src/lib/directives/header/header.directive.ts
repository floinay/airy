import {Directive, ElementRef, HostBinding} from '@angular/core';
import {StickyDirective} from '../../interfaces/sticky-directive';

@Directive({
  selector: '[airStickyHeader]'
})
export class HeaderDirective implements StickyDirective {

  constructor(public elementRef: ElementRef) {
  }

  @HostBinding('class.sticky-header')
  sticky = true;

  get offset(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
