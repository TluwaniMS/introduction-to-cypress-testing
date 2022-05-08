import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroesDisplayComponent } from './super-heroes-display.component';

describe('SuperHeroesDisplayComponent', () => {
  let component: SuperHeroesDisplayComponent;
  let fixture: ComponentFixture<SuperHeroesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
