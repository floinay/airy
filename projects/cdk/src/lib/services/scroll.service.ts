import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {DOCUMENT} from '@angular/common';

export interface ScrollOptions {
  behavior?: ScrollBehavior;
  offset?: number;
}

// @dynamic
@Injectable({providedIn: 'root'})
export class ScrollService {
  constructor(@Inject(WINDOW) readonly window: Window, @Inject(DOCUMENT) readonly document: Document) {
  }

  scrollTo(element: HTMLElement, {behavior, offset}: ScrollOptions = {offset: 0, behavior: 'smooth'}): void {
    const header = this.document.getElementById('air-page-header');
    const headerHeight = header ? header.offsetHeight : 0;
    const top = element.getBoundingClientRect().top - headerHeight - (offset || 0);
    this.window.scrollTo({top, behavior});
  }

  scrollById(id: string, options?: ScrollOptions): void {
    const element = this.document.getElementById(id);
    if (element) {
      this.scrollTo(element, options);
    }
  }
}
