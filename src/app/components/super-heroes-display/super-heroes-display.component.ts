import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../../services/super-heroes.service';

@Component({
  selector: 'app-super-heroes-display',
  templateUrl: './super-heroes-display.component.html',
  styleUrls: ['./super-heroes-display.component.sass'],
})
export class SuperHeroesDisplayComponent implements OnInit {
  superHeroes: any[] = [];

  constructor(private superHeroesService: SuperHeroesService) {}

  ngOnInit(): void {
    this.superHeroes = this.superHeroesService.getSuperHeroes();
  }
}
