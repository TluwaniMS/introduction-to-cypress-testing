import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { PasswordConfirmationValidatorDirective } from '../../custom-form-validator/password-confirmation-validator.directive';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.sass'],
})
export class RegistrationPageComponent implements OnInit {
  @Output() changeAuthScreen = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private passwordConfirmationValidatorDirective: PasswordConfirmationValidatorDirective
  ) {}
  userRegistrationForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      passwordConfirmation: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },
    { validators: Validators.compose([this.passwordConfirmationValidatorDirective.validate])  }
  );

  ngOnInit(): void {}

  registerUser() {
    console.log(this.userRegistrationForm.value);
  }

  switchAuthScreen() {
    this.changeAuthScreen.emit();
  }
}
