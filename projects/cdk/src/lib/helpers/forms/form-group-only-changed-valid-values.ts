import {FormGroup} from '@angular/forms';
import {UnknownObject} from '../../types';

export function formGroupOnlyChangedValidValues(group: FormGroup, pristine = true): UnknownObject {
  const values: UnknownObject = {};
  Object.entries(group.controls).forEach(([key, control]) => {
    if (control.dirty && control.valid) {
      if (control instanceof FormGroup) {
        const value = formGroupOnlyChangedValidValues(control, pristine);
        if (Object.keys(value).length) {
          values[key] = value;
        }
      } else {
        if (pristine) {
          control.markAsPristine();
        }
        values[key] = control.value;
      }
    }
  });

  return values;
}
