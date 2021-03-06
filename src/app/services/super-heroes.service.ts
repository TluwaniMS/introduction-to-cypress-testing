import { Injectable } from '@angular/core';
import { SuperHeroes } from '../sample-data/super-heroes-sample-data';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroesService {
  ArrayOfSuperHeroes = SuperHeroes;
  constructor() {}

  createSuperHero(superHero: any) {
    this.ArrayOfSuperHeroes.push(superHero);
  }

  deleteSuperHeroById(superHeroId: number) {
    this.ArrayOfSuperHeroes = this.ArrayOfSuperHeroes.filter(
      (superHero) => superHero._id !== superHeroId
    );
  }

  getSuperHeroes() {
    return this.ArrayOfSuperHeroes;
  }

  generateSuperHeroIdId() {
    return this.ArrayOfSuperHeroes.length + 1;
  }
}
