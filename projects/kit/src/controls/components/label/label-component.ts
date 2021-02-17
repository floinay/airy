import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input} from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'label[air-label]',
  exportAs: 'label',
  templateUrl: './label-component.html',
  styleUrls: ['./label-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {
  @HostBinding('class.air-label') class = true;

  @HostBinding('class.required')
  @Input() required = false;
  @Input() for: string | undefined;
  @Input() enableOnClick = false;

  get forElement(): HTMLElement | null {
    if (this.for) {
      return document.getElementById(this.for);
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

}
