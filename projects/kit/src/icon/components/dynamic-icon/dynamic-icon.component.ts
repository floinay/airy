import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input } from '@angular/core';
import { ICON_MODULE_OPTIONS } from '../../options';
import { IconModuleOptions } from '../../options';
import { CanColorCtor, CanSizeCtor, HasElementRef, mixinColor, mixinSize } from '../../../cdk';

const IconBase: CanColorCtor & CanSizeCtor = mixinSize(mixinColor(HasElementRef));

@Component({
  selector: 'air-dynamic-icon',
  template: `
    <svg [style.stroke]="stroke" [style.fill]="fill">
      <use [attr.xlink:href]="src"></use>
    </svg>
  `,
  styleUrls: ['./dynamic-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color', 'size']
})
export class DynamicIconComponent extends IconBase {
  @Input() name = '';
  @Input() sprite = this.options.pathToDynamicIconsSprite;

  @Input() stroke?: 'var(--current-color)' | 'none' | string;

  @Input() fill?: 'var(--current-color)' | 'none' | string;

  get src(): string {
    return `${this.sprite}#${this.name}`;
  }

  constructor(private elementRef: ElementRef, @Inject(ICON_MODULE_OPTIONS) readonly options: IconModuleOptions) {
    super(elementRef);
  }
}
