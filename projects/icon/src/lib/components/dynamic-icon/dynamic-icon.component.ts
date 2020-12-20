import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input } from '@angular/core';
import { ICON_MODULE_OPTIONS } from '../../options/icon-module-options.token';
import { IconModuleOptions } from '../../options/icon-module.options';
import { CanColorCtor, CanSizeCtor, HasElementRef, mixinColor, mixinSize } from '@airy-ui/cdk';

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

  @Input() stroke: 'var(--current-color)' | 'none' | string = 'var(--current-color)';

  @Input() fill: 'var(--current-color)' | 'none' | string = 'var(--current-color)';

  get src(): string {
    return `${this.sprite}#${this.name}`;
  }

  constructor(private elementRef: ElementRef, @Inject(ICON_MODULE_OPTIONS) readonly options: IconModuleOptions) {
    super(elementRef);
  }
}
