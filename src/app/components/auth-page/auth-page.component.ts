import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.sass'],
})
export class AuthPageComponent implements OnInit {
  signInFormDisplayIsActive = false;

  constructor() {}

  ngOnInit(): void {}

  changeDisplayAuthView() {
    this.signInFormDisplayIsActive
      ? (this.signInFormDisplayIsActive = false)
      : (this.signInFormDisplayIsActive = true);
  }
}
