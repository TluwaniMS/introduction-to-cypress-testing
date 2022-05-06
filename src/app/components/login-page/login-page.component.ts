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
    this.authService
      .signIn(this.userLoginForm.value)
      .then((response) => {
        this.snackbarService.successSnackBarDisplay(
          AuthenticationResponseMessage.successful
        );
      })
      .catch((error) => {
        const message = this.authenticationErrorMessageSelection(error.message);

        this.snackbarService.errorSnackBarDisplay(message);
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
