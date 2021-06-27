import {Directive} from '@angular/core';
import {ScrollService} from '../../services/scroll.service';

@Directive({
  selector: '[airScroll]',
  exportAs: 'scroll'
})
export class ScrollDirective {

  constructor(private scrollService: ScrollService) {
  }

  scrollTo(element: HTMLElement, options: ScrollOptions): void {
    this.scrollService.scrollTo(element, options);
  }

  scrollById(id: string, options?: ScrollOptions): void {
    this.scrollService.scrollById(id, options);
  }

}
