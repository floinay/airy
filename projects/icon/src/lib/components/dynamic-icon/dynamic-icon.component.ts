import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input} from '@angular/core';
import {ICON_MODULE_OPTIONS, IconModuleOptions} from '../../options';
import {
  CanColorCtor,
  CanDisabledCtor,
  CanSizeCtor,
  HasElementRef,
  mixinColor,
  mixinDisabled,
  mixinSize
} from '@airy-ui/cdk';

const IconBase: CanColorCtor & CanSizeCtor & CanDisabledCtor = mixinDisabled(mixinSize(mixinColor(HasElementRef, 'primary')));


@Component({
  selector: 'air-dynamic-icon',
  template: `
    <svg pointer-events="all" [class.mode-fill]="isFillMode" [class.mode-stroke]="isStrokeMode">
      <use pointer-events="all" [attr.xlink:href]="src"></use>
    </svg>
  `,
  styleUrls: ['./dynamic-icon.component.scss', '../icon/icon-sizes.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color', 'size', 'disabled']
})
export class DynamicIconComponent extends IconBase {
  @Input() name = '';
  @Input() sprite = this.options.defaultSprite;

  @Input() colorMode: 'fill' | 'stroke' | 'all' = 'fill';

  get isFillMode(): boolean {
    return this.colorMode === 'fill' || this.colorMode === 'all';
  }

  @HostBinding('class.mode-stroke')
  get isStrokeMode(): boolean {
    return this.colorMode === 'stroke' || this.colorMode === 'all';
  }


  get src(): string {
    return `${this.options.pathToSprites}${this.sprite}.svg#${this.name}`;
  }

  constructor(private elementRef: ElementRef,
              @Inject(ICON_MODULE_OPTIONS) readonly options: IconModuleOptions) {
    super(elementRef);
  }
}
