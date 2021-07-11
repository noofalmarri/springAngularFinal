import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentvalidationListComponent } from './contentvalidation-list.component';

describe('ContentvalidationListComponent', () => {
  let component: ContentvalidationListComponent;
  let fixture: ComponentFixture<ContentvalidationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentvalidationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentvalidationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
