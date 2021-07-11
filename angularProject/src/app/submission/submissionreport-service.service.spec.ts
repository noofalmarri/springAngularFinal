import { TestBed, inject } from '@angular/core/testing';

import { SubmissionreportServiceService } from './submissionreport-service.service';

describe('SubmissionreportServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmissionreportServiceService]
    });
  });

  it('should be created', inject([SubmissionreportServiceService], (service: SubmissionreportServiceService) => {
    expect(service).toBeTruthy();
  }));
});
