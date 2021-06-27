import {ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {CanColorCtor, HasElementRef, mixinColor, randomId} from '../../../../../../cdk/src/lib';
import {PopoverComponentInterface} from '../../interfaces';

const PopoverBase: CanColorCtor = mixinColor(HasElementRef, 'primary');

@Component({
  selector: 'air-popover',
  templateUrl: './popover.component.html',
  exportAs: 'popover',
  styleUrls: ['./popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color']
})
export class PopoverComponent extends PopoverBase implements PopoverComponentInterface {
  @Input() id = randomId();
  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<any>;

  constructor(public elementRef: ElementRef) {
    super(elementRef);
  }
}
