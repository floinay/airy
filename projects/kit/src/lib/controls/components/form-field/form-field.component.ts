import {AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, HostBinding} from '@angular/core';
import {ToggleComponent} from '../toggle/toggle.component';
import {LabelComponent} from '../label/label-component';

@Component({
  selector: 'air-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent implements AfterViewInit {
  @HostBinding('class.content-inline')
  @ContentChild(ToggleComponent, {static: true}) toggle: ToggleComponent | undefined;
  @ContentChild(LabelComponent, {static: true}) label: LabelComponent | undefined;

  constructor() {
  }


  ngAfterViewInit(): void {
    if (this.toggle && this.label) {
      this.label.enableOnClick = true;
    }
  }

}
