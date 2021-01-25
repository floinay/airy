import {Directive, ElementRef, HostBinding} from '@angular/core';
import {StickyDirective} from '../../interfaces';

@Directive({
  selector: '[airStart], [airStickyStart]'
})
export class StartDirective implements StickyDirective {

  constructor(public elementRef: ElementRef<HTMLDivElement>) {
  }

  @HostBinding('class.sticky-start')
  get sticky(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airStickyStart');
  }

  get offset(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }

}
