import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, forwardRef,
  HostBinding, Input
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CanColorCtor, CanDisabledCtor, HasElementRef, mixinColor, mixinDisabled} from '../../../cdk';
import {FocusMonitor} from '@angular/cdk/a11y';

const CheckboxBase: CanColorCtor & CanDisabledCtor = mixinDisabled(mixinColor(HasElementRef, 'primary'));

@Component({
  selector: 'air-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color', 'disabled'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true}],
})
export class CheckboxComponent extends CheckboxBase implements ControlValueAccessor, AfterViewInit {
  @HostBinding('class.active')
  value = false;

  @Input() name = '';

  @Input() required = false;

  @Input() tabindex = 0;

  @Input() ariaLabel = '';
  @Input() ariaLabelledby: string | null = null;

  onChange = (value: boolean) => {
  }
  onTouched = () => {
  }


  constructor(private elementRef: ElementRef,
              private focusMonitor: FocusMonitor,
              private cdr: ChangeDetectorRef) {
    super(elementRef);
  }

  writeValue(value: boolean): void {
    this.value = value;
  }


  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        Promise.resolve().then(() => {
          this.onTouched();
          this.cdr.markForCheck();
        });
      }
    });
  }

  change(): void {
    this.value = !this.value;
    this.onChange(this.value);
    this.cdr.markForCheck();
  }
}
