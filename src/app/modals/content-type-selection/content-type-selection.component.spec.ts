import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTypeSelectionComponent } from './content-type-selection.component';

describe('ContentTypeSelectionComponent', () => {
  let component: ContentTypeSelectionComponent;
  let fixture: ComponentFixture<ContentTypeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTypeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
