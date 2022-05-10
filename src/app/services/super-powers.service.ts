import { Injectable } from '@angular/core';
import { SuperPowers } from '../sample-data/super-powers-sample-data';

@Injectable({
  providedIn: 'root',
})
export class SuperPowersService {
  ArrayOfSuperPowers = SuperPowers;
  constructor() {}

  createSuperPower(superPower: any) {
    this.ArrayOfSuperPowers.push(superPower);
  }

  getAllSuperPowers() {
    return this.ArrayOfSuperPowers;
  }

  deleteSuperPowerById(superPowerId: number) {
    this.ArrayOfSuperPowers = this.ArrayOfSuperPowers.filter(
      (superPower) => superPower._id !== superPowerId
    );
  }

  generateSuperPowerId() {
    return this.ArrayOfSuperPowers.length + 1
  }
}
