import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[airHideIfEmpty]'
})
export class HideIfEmptyDirective {
  @HostBinding('attr.hidden')
  get isEmpty(): boolean | null {
    return Boolean(this.elementRef.nativeElement.innerHTML) ? null : true;
  }

  constructor(private elementRef: ElementRef) {

  }

}
