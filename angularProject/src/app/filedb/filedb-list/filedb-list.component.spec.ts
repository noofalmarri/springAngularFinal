import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledbListComponent } from './filedb-list.component';

describe('FiledbListComponent', () => {
  let component: FiledbListComponent;
  let fixture: ComponentFixture<FiledbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiledbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
