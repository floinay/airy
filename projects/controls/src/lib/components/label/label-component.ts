import { Component, HostBinding, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'label[air-label]',
  exportAs: 'label',
  templateUrl: './label-component.html',
  styleUrls: ['./label-component.scss']
})
export class LabelComponent {
  @HostBinding('class.required')
  @Input() required = false;
  @Input() for: string | undefined;
  @Input() enableOnClick = false;

  get forElement(): HTMLElement | null {
    if (this.for) {
      return this.document.getElementById(this.for);
    }

    return null;
  }

  @HostListener('click')
  onClick(): void {
    const element = this.forElement;
    if (this.enableOnClick && element) {
      element.click();
    }
  }

  constructor(@Inject(DOCUMENT) readonly document: Document) {
  }
}
