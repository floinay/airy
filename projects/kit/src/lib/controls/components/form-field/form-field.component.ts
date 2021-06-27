import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'air-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @HostBinding('class.inline')
  @Input() inline = false;

  @ViewChild('suffix', {read: ElementRef, static: true}) suffix!: ElementRef<HTMLDivElement>;
  @ViewChild('prefix', {read: ElementRef, static: true}) prefix!: ElementRef<HTMLDivElement>;

  @HostBinding('style.--input-padding-start')
  get inputPaddingStart(): string {
    return this.prefix.nativeElement.clientWidth + 'px';
  }

  @HostBinding('style.--input-padding-end')
  get inputPaddingEnd(): string {
    return this.suffix.nativeElement.clientWidth + 'px';
  }

  constructor() {
  }
}
