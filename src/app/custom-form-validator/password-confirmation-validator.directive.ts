
import { Directive } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password')?.value;
    const passwordConfirmation = control.get('passwordConfirmation')?.value;

    if (password === null || passwordConfirmation === null) {
      return null;
    }

    const passwordsMatch = password === passwordConfirmation;

    return passwordsMatch ? null : { passwordsDontMatch: true };
  }
}