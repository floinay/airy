import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const confirmValidator = (name: string, confirmName: string): ValidatorFn => (formGroup: AbstractControl): ValidationErrors | null => {
  if (formGroup instanceof FormGroup) {
    const control = formGroup.controls[name];
    const matchingControl = formGroup.controls[confirmName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return null;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({confirmValidator: true});
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  }
  throw new Error('This validator work with form group only');
}
