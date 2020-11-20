import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { CanColorCtor, mixinColor } from '../../../cdk/src/lib/color/color';
import { CanSizeCtor, mixinSize } from '../../../cdk/src/lib/size/size';
import { HasElementRef } from '../../../cdk/src/lib/types/has-element-ref';
import { CanDisabledCtor, mixinDisabled } from '../../../cdk/src/lib/disabled/can-disabled';
import { AirFill } from './types/air-fill';
import { AirExpand } from './types/air-expand';

const ButtonBase: CanColorCtor & CanSizeCtor & CanDisabledCtor = mixinDisabled(mixinColor(mixinSize(HasElementRef), 'default'));

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[air-button], a[air-button]',
  exportAs: 'airButton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="[start]"></ng-content>
    <ng-content></ng-content>
    <ng-content select="end"></ng-content>
  `,
  styleUrls: ['./button.component.scss'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [
    'color', 'size', 'disabled'
  ]
})
export class ButtonComponent extends ButtonBase {
  @HostBinding('attr.tabindex') @Input() tabindex = 0;
  @Input() fill: AirFill;

  @Input() expand: AirExpand;

  @HostBinding('class')
  get class(): string {
    const fill = this.fill || '';
    const expand = this.expand || '';

    return `${fill} ${expand}`;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    super(elementRef, 'default');
  }

}
