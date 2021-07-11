import { TestBed, inject } from '@angular/core/testing';

import { OfficesubmissionsService } from './officesubmissions.service';

describe('OfficesubmissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficesubmissionsService]
    });
  });

  it('should be created', inject([OfficesubmissionsService], (service: OfficesubmissionsService) => {
    expect(service).toBeTruthy();
  }));
});
