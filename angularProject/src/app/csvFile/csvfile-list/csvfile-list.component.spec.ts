import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvfileListComponent } from './csvfile-list.component';

describe('CsvfileListComponent', () => {
  let component: CsvfileListComponent;
  let fixture: ComponentFixture<CsvfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
