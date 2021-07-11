import { TestBed, inject } from '@angular/core/testing';

import { ContentvalidationServiceService } from './contentvalidation-service.service';

describe('ContentvalidationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentvalidationServiceService]
    });
  });

  it('should be created', inject([ContentvalidationServiceService], (service: ContentvalidationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
