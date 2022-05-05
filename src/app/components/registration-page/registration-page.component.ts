import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.sass'],
})
export class RegistrationPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  userRegistrationForm = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {}
}
