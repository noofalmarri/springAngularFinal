import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentuserListComponent } from './recruitmentuser-list.component';

describe('RecruitmentuserListComponent', () => {
  let component: RecruitmentuserListComponent;
  let fixture: ComponentFixture<RecruitmentuserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentuserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
