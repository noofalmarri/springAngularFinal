import { TestBed, inject } from '@angular/core/testing';

import { OfficeserviceService } from './officeservice.service';

describe('OfficeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficeserviceService]
    });
  });

  it('should be created', inject([OfficeserviceService], (service: OfficeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
