import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuperPowersService } from '../../services/super-powers.service';

@Component({
  selector: 'app-super-power-creator',
  templateUrl: './super-power-creator.component.html',
  styleUrls: ['./super-power-creator.component.sass'],
})
export class SuperPowerCreatorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private superPowersService: SuperPowersService
  ) {}

  ngOnInit(): void {}

  superPowerCreationForm = this.fb.group({
    _id: [
      this.superPowersService.generateSuperPowerId(),
      [Validators.required],
    ],
    power: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  createSuperPower() {
    console.log(this.superPowerCreationForm.value);
  }
}
