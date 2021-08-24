import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CanColorCtor, CanDisabledCtor, HasElementRef, mixinColor, mixinDisabled } from '@airy-ui/cdk';


const MixinBase: CanDisabledCtor & CanColorCtor = mixinColor(mixinDisabled(HasElementRef), 'primary');

@Component({
  selector: 'air-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color', 'disabled'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleComponent), multi: true}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent extends MixinBase implements ControlValueAccessor {
  @HostBinding('class.active')
  status = false;

  @HostBinding('attr.tabindex') @Input() tabindex = 0;

  @Input() enabledValue: unknown = true;

  @Input() disabledValue: unknown = false;

  @HostListener('click')
  @HostListener('keyup.space')
  @HostListener('keyup.enter')
  toggle(): void {
    this.status = !this.status;
    this.onChange(this.status ? this.enabledValue : this.disabledValue);
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }


  writeValue(value: boolean): void {
    this.status = value === this.enabledValue;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange(value: unknown): void {
  }

  onTouched(): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = false;
  }

}
