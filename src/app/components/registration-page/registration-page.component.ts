import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { PasswordConfirmationValidatorDirective } from '../../custom-form-validator/password-confirmation-validator.directive';
import { PasswordValidatorDirective } from '../../custom-form-validator/password-validator.directive';
import { AuthenticationService } from '../../services/authentication.service';
import { SnackBarServiceService } from '../../services/snack-bar-service.service';
import { UserRegistrationResponseMessages } from '../../enumerators.ts/user-registration-response-messages';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.sass'],
})
export class RegistrationPageComponent implements OnInit {
  @Output() changeAuthScreen = new EventEmitter<any>();

  spinnerIsActive = false;
  constructor(
    private fb: FormBuilder,
    private passwordConfirmationValidatorDirective: PasswordConfirmationValidatorDirective,
    private authenticationService: AuthenticationService,
    private snackBarServiceService: SnackBarServiceService,
    private passwordValidatorDirective: PasswordValidatorDirective
  ) {}
  userRegistrationForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      passwordConfirmation: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, this.passwordValidatorDirective.validate],
      ],
    },
    {
      validators: Validators.compose([
        this.passwordConfirmationValidatorDirective.validate,
      ]),
    }
  );

  ngOnInit(): void {}

  registerUser() {
    this.spinnerIsActive = true;
    this.authenticationService
      .register(this.userRegistrationForm.value)
      .then(() => {
        this.snackBarServiceService.successSnackBarDisplay(
          UserRegistrationResponseMessages.successful
        );
        this.userRegistrationForm.reset();
        this.spinnerIsActive = false;
      })
      .catch(() => {
        this.snackBarServiceService.errorSnackBarDisplay(
          UserRegistrationResponseMessages.userAlreadyExists
        );
        this.userRegistrationForm.reset();
        this.spinnerIsActive = false;
      });
  }

  switchAuthScreen() {
    this.changeAuthScreen.emit();
  }
}
