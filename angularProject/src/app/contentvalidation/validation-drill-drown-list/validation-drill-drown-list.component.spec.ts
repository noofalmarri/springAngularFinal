import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDrillDrownListComponent } from './validation-drill-drown-list.component';

describe('ValidationDrillDrownListComponent', () => {
  let component: ValidationDrillDrownListComponent;
  let fixture: ComponentFixture<ValidationDrillDrownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationDrillDrownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDrillDrownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
