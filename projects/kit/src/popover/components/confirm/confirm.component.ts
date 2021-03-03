import {ChangeDetectionStrategy, Component, TemplateRef, ViewChild} from '@angular/core';
import {PopoverComponentInterface} from '../../interfaces';
import {randomId} from '../../../cdk';

@Component({
  selector: 'air-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent implements PopoverComponentInterface {
  id = randomId();
  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<any>;
  constructor() {
  }
}
