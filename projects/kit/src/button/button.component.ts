import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input} from '@angular/core';
import {AirFill} from './types';
import {AirExpand} from './types';
import {CanColorCtor, CanSizeCtor, HasElementRef, mixinColor, mixinSize} from '../cdk';

const ButtonBase: CanColorCtor & CanSizeCtor = mixinColor(mixinSize(HasElementRef), 'primary');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[air-button], a[air-button], label[air-button]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="[start]"></ng-content>
    <ng-content></ng-content>
    <ng-content select="end"></ng-content>
  `,
  styleUrls: ['./button.component.scss'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [
    'color', 'size'
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

    return `${fill} ${expand} air-button`;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    super(elementRef, 'default');
  }

}
