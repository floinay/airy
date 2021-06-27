import {ChangeDetectionStrategy, Component, TemplateRef, ViewChild} from '@angular/core';
import {PopoverComponentInterface} from '../../interfaces';
import {randomId} from '../../../../../../cdk/src/lib';

@Component({
  selector: 'air-confirm',
  templateUrl: './confirm.component.html',
  exportAs: 'confirm',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent implements PopoverComponentInterface {
  id = randomId();
  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<any>;
}
