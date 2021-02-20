import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input} from '@angular/core';
import {ICON_MODULE_OPTIONS, IconModuleOptions} from '../../options';
import {CanColorCtor, CanSizeCtor, HasElementRef, mixinColor, mixinSize} from '../../../cdk';

const IconBase: CanColorCtor & CanSizeCtor = mixinSize(mixinColor(HasElementRef));

@Component({
  selector: 'air-dynamic-icon',
  template: `
    <svg [class.mode-fill]="isFillMode" [class.mode-stroke]="isStrokeMode">
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

  @Input() colorMode: 'fill' | 'stroke' | 'all' = 'fill';

  get isFillMode(): boolean {
    console.log(this.colorMode);
    return this.colorMode === 'fill' || this.colorMode === 'all';
  }

  @HostBinding('class.mode-stroke')
  get isStrokeMode(): boolean {
    return this.colorMode === 'stroke' || this.colorMode === 'all';
  }


  get src(): string {
    return `${this.sprite}#${this.name}`;
  }

  constructor(private elementRef: ElementRef,
              @Inject(ICON_MODULE_OPTIONS) readonly options: IconModuleOptions) {
    super(elementRef);
  }
}
