import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayPageComponent } from './user-display-page.component';

describe('UserDisplayPageComponent', () => {
  let component: UserDisplayPageComponent;
  let fixture: ComponentFixture<UserDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisplayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
