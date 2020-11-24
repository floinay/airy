import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { AirFill } from './types/air-fill';
import { AirExpand } from './types/air-expand';
import { CanColorCtor, CanDisabledCtor, CanSizeCtor, HasElementRef, mixinColor, mixinDisabled, mixinSize } from '@airy-ui/cdk';

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
