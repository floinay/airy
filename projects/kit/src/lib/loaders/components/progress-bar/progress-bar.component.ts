import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {CanColorCtor, HasElementRef, mixinColor} from '../../../../../../cdk/src/lib';

const BarBase: CanColorCtor = mixinColor(HasElementRef, 'primary');

@Component({
  selector: 'air-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color']
})
export class ProgressBarComponent extends BarBase {

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}
