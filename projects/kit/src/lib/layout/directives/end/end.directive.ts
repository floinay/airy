import {Directive, ElementRef, HostBinding} from '@angular/core';
import {StickyDirective} from '../../interfaces';

@Directive({
  selector: '[airEnd],[airStickyEnd]'
})
export class EndDirective implements StickyDirective {

  constructor(public elementRef: ElementRef) {
  }

  @HostBinding('class.sticky-end')
  get sticky(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airStickyEnd');
  }

  get offset(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }
}
