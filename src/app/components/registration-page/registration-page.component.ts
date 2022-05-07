import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.sass'],
})
export class RegistrationPageComponent implements OnInit {
  @Output() changeAuthScreen = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}
  userRegistrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwordConfirmation: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  registerUser() {
    console.log(this.userRegistrationForm.value);
  }

  switchAuthScreen() {
    this.changeAuthScreen.emit();
  }
}
