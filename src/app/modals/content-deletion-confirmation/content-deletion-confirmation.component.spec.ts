import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDeletionConfirmationComponent } from './content-deletion-confirmation.component';

describe('ContentDeletionConfirmationComponent', () => {
  let component: ContentDeletionConfirmationComponent;
  let fixture: ComponentFixture<ContentDeletionConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDeletionConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDeletionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
