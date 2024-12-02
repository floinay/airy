import {ChangeDetectionStrategy, Component, HostBinding, HostListener, inject, Input} from '@angular/core';
import {DOCUMENT} from "@angular/common";


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[air-label]',
  exportAs: 'label',
  templateUrl: './label-component.html',
  styleUrls: ['./label-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {
  readonly document = inject(DOCUMENT);
  @HostBinding('class.air-label') class = true;

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
    if (this.enableOnClick) {
      this.forElement?.click();
    }
  }

}
