import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
// @dynamic
@Directive({
  selector: '[airScrollToMe]',
  exportAs: 'scrollToMe'
})
export class ScrollToMeDirective {
  @Input() behavior: ScrollBehavior = 'smooth';

  constructor(private elementRef: ElementRef,
              @Inject(WINDOW) readonly window: Window) {
  }

  scroll(behavior?: ScrollBehavior): void {
    const y = this.elementRef.nativeElement.getBoundingClientRect().top + this.window.pageYOffset - (this.window.innerHeight - 300);
    this.window.scrollTo({top: y, behavior: behavior || this.behavior});
  }
}
