import { FormGroup } from '@angular/forms';

export function formGroupOnlyChangedValues(formGroup: FormGroup, pristine = true): { [key: string]: unknown } {
  const dirtyKeys = Object.keys(formGroup.controls).filter((key) => {
    const control = formGroup.controls[key];
    const dirty = control.dirty;

    if (dirty && pristine) {
      control.markAsPristine();
    }

    return dirty;
  });

  const value: { [key: string]: unknown } = {};
  dirtyKeys.forEach((key) => {
    value[key] = formGroup.controls[key].value;
  });


  return value;
}
