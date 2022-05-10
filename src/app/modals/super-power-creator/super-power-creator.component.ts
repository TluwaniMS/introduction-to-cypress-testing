import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-super-power-creator',
  templateUrl: './super-power-creator.component.html',
  styleUrls: ['./super-power-creator.component.sass'],
})
export class SuperPowerCreatorComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  superPowerCreationForm = this.fb.group({
    _id: ['', [Validators.required]],
    power: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  createSuperPower() {}
}
