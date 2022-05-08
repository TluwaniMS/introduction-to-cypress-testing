import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value === null) {
      return null;
    }

    const passwordIsValid = control.value.length >= 7;

    return !passwordIsValid ? { passwordIsValidated: true } : null;
  }
}
