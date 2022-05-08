import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroCreatorComponent } from './super-hero-creator.component';

describe('SuperHeroCreatorComponent', () => {
  let component: SuperHeroCreatorComponent;
  let fixture: ComponentFixture<SuperHeroCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
