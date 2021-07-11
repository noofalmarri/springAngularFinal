import { TestBed, inject } from '@angular/core/testing';

import { SubmissioncontentService } from './submissioncontent.service';

describe('SubmissioncontentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmissioncontentService]
    });
  });

  it('should be created', inject([SubmissioncontentService], (service: SubmissioncontentService) => {
    expect(service).toBeTruthy();
  }));
});
