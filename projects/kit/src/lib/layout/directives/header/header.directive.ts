import {Directive, ElementRef, HostBinding} from '@angular/core';
import {StickyDirective} from '../../interfaces';

@Directive({
  selector: '[airHeader], [airStickyHeader]'
})
export class HeaderDirective implements StickyDirective {
  @HostBinding('attr.id') idAttribute = 'air-page-header';

  constructor(public elementRef: ElementRef) {
  }

  @HostBinding('class.sticky-header')
  get sticky(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airStickyHeader');
  }

  get offset(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
