import {ElementRef} from '@angular/core';

export interface StickyDirective {
  sticky: boolean;
  elementRef: ElementRef;
  offset: number;
}
