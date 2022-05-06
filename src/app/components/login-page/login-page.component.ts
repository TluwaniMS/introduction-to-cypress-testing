import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
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
        console.log(`Success`);
      })
      .catch((error) => {
        console.log(`Error`);
      });
  }
}
