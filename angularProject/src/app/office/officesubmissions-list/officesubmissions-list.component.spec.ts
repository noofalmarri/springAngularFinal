import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesubmissionsListComponent } from './officesubmissions-list.component';

describe('OfficesubmissionsListComponent', () => {
  let component: OfficesubmissionsListComponent;
  let fixture: ComponentFixture<OfficesubmissionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesubmissionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesubmissionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
