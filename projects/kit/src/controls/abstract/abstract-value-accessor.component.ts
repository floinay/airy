import {ControlValueAccessor} from '@angular/forms';

export abstract class AbstractValueAccessorComponent implements ControlValueAccessor {
  value: any;

  onChange(value: any): void {

  }

  onTouched(): void {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}
