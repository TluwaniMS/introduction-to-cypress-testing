import { TestBed } from '@angular/core/testing';

import { SuperPowersService } from './super-powers.service';

describe('SuperPowersService', () => {
  let service: SuperPowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperPowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
