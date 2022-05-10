import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuperPowersService } from '../../services/super-powers.service';
import { SuperHeroesService } from '../../services/super-heroes.service';

@Component({
  selector: 'app-super-hero-creator',
  templateUrl: './super-hero-creator.component.html',
  styleUrls: ['./super-hero-creator.component.sass'],
})
export class SuperHeroCreatorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private superPowersService: SuperPowersService,
    private superHeroesService: SuperHeroesService
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
    console.log(this.superHeroCreationForm.value);
  }
}
