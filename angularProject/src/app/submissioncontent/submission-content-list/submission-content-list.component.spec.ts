import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionContentListComponent } from './submission-content-list.component';

describe('SubmissionContentListComponent', () => {
  let component: SubmissionContentListComponent;
  let fixture: ComponentFixture<SubmissionContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
