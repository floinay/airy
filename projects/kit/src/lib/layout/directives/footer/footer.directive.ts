import {Directive, ElementRef, HostBinding} from '@angular/core';
import {StickyDirective} from '../../interfaces';

@Directive({
  selector: '[airFooter], [airStickyFooter]'
})
export class FooterDirective implements StickyDirective {

  constructor(public elementRef: ElementRef) {
  }

  @HostBinding('class.sticky-footer')
  get sticky(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airStickyFooter');
  }

  get offset(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }

}
