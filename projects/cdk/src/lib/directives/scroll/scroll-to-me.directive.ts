import {Directive, ElementRef} from '@angular/core';
import {ScrollService} from '../../services/scroll.service';

@Directive({
  selector: '[airScrollToMe]',
  exportAs: 'scrollToMe'
})
export class ScrollToMeDirective {
  constructor(private elementRef: ElementRef,
              private scrollService: ScrollService) {
  }

  scroll(behavior?: ScrollBehavior, options?: ScrollOptions): void {
    this.scrollService.scrollTo(this.elementRef.nativeElement, options);
  }
}
