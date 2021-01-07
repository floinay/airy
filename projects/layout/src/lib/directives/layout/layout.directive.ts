import {Directive, HostBinding, Input} from '@angular/core';
import {Layout} from './types/layout';
import {AlignItems, JustifyContent, LayoutAlign} from './types/layout-align';
import {parseLayoutAlign} from './helpers/parse-layout-align';

@Directive({
  selector: '[airLayout]'
})
export class LayoutDirective {
  @HostBinding('style.display') flex = 'flex';

  @HostBinding('style.flex-direction')
  @Input() airLayout: Layout = 'row';

  @HostBinding('style.justify-content') private justifyContent: JustifyContent | AlignItems | undefined;
  @HostBinding('style.align-items') private alignItems: AlignItems | JustifyContent | undefined;

  @Input() set layoutAlign(value: LayoutAlign | undefined) {
    if (value) {
      const {alignItems, justifyContent} = parseLayoutAlign(value);
      this.justifyContent = justifyContent;
      this.alignItems = alignItems;
    } else {
      this.justifyContent = undefined;
      this.alignItems = undefined;
    }
  }

  constructor() {
  }

}
