import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuperPowersService } from '../../services/super-powers.service';
import { SuperHeroesService } from '../../services/super-heroes.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from '../../services/snack-bar-service.service';
import { DefaultResponseMessages } from '../../enumerators.ts/default-response-messages';

@Component({
  selector: 'app-super-hero-creator',
  templateUrl: './super-hero-creator.component.html',
  styleUrls: ['./super-hero-creator.component.sass'],
})
export class SuperHeroCreatorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private superPowersService: SuperPowersService,
    private superHeroesService: SuperHeroesService,
    private matDialogRef: MatDialogRef<SuperHeroCreatorComponent>,
    private router: Router,
    private snackbarService: SnackBarServiceService
  ) {}

  superPowers: any[] = [];

  ngOnInit(): void {
    this.superPowers = this.superPowersService.getAllSuperPowers();
  }

  superHeroCreationForm = this.fb.group({
    _id: [
      this.superHeroesService.generateSuperHeroIdId(),
      [Validators.required],
    ],
    name: ['', [Validators.required]],
    superPowers: ['', [Validators.required]],
  });

  createSuperHero() {
    this.superHeroesService.createSuperHero(this.superHeroCreationForm.value);
    this.matDialogRef.close();
    this.router.navigate(['/super-heroes-display']);
    this.snackbarService.successSnackBarDisplay(
      DefaultResponseMessages.OperationCompletedSuccessfully
    );
  }
}
