import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfileListComponent } from './uploadfile-list.component';

describe('UploadfileListComponent', () => {
  let component: UploadfileListComponent;
  let fixture: ComponentFixture<UploadfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
