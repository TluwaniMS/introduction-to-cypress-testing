import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPowersDisplayComponent } from './super-powers-display.component';

describe('SuperPowersDisplayComponent', () => {
  let component: SuperPowersDisplayComponent;
  let fixture: ComponentFixture<SuperPowersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPowersDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperPowersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
