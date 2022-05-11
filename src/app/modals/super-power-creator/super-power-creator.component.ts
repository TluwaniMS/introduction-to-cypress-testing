import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuperPowersService } from '../../services/super-powers.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from '../../services/snack-bar-service.service';
import { DefaultResponseMessages } from '../../enumerators.ts/default-response-messages';

@Component({
  selector: 'app-super-power-creator',
  templateUrl: './super-power-creator.component.html',
  styleUrls: ['./super-power-creator.component.sass'],
})
export class SuperPowerCreatorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private superPowersService: SuperPowersService,
    private router: Router,
    private matDialogRef: MatDialogRef<SuperPowerCreatorComponent>,
    private snackbarService: SnackBarServiceService
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
    this.superPowersService.createSuperPower(this.superPowerCreationForm.value);
    this.matDialogRef.close();
    this.router.navigate(['/super-powers-display']);
    this.snackbarService.successSnackBarDisplay(
      DefaultResponseMessages.OperationCompletedSuccessfully
    );
  }
}
