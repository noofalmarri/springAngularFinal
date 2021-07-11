import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlsauserListComponent } from './adlsauser-list.component';

describe('AdlsauserListComponent', () => {
  let component: AdlsauserListComponent;
  let fixture: ComponentFixture<AdlsauserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdlsauserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdlsauserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
