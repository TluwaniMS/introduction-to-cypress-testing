import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPowerCreatorComponent } from './super-power-creator.component';

describe('SuperPowerCreatorComponent', () => {
  let component: SuperPowerCreatorComponent;
  let fixture: ComponentFixture<SuperPowerCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPowerCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperPowerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
