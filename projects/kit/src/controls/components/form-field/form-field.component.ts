import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'air-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {


  constructor() {
  }
}
