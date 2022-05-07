import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SnackBarServiceService } from '../../services/snack-bar-service.service';
import { AuthenticationResponseMessage } from '../../enumerators.ts/authentication-response-messages';
import { FireBaseAuthErrorMessage } from '../../enumerators.ts/firebase-sign-in-error-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  spinnerIsActive = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private snackbarService: SnackBarServiceService
  ) {}

  userLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  signIn() {
    this.spinnerIsActive = true;
    this.authService
      .signIn(this.userLoginForm.value)
      .then((response) => {
        this.snackbarService.successSnackBarDisplay(
          AuthenticationResponseMessage.successful
        );

        this.userLoginForm.reset();
        this.spinnerIsActive = false;
      })
      .catch((error) => {
        const message = this.authenticationErrorMessageSelection(error.message);

        this.snackbarService.errorSnackBarDisplay(message);

        this.userLoginForm.reset();
        this.spinnerIsActive = false;
      });
  }

  authenticationErrorMessageSelection(fireBaseErrorMessage: string) {
    let message = '';

    switch (fireBaseErrorMessage) {
      case FireBaseAuthErrorMessage.UnidentifiedUser:
        message = AuthenticationResponseMessage.userNotMatching;
        break;
      case FireBaseAuthErrorMessage.WrongPassword:
        message = AuthenticationResponseMessage.passwordNotMatching;
        break;
    }

    return message;
  }
}
