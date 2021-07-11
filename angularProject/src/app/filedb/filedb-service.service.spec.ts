import { TestBed, inject } from '@angular/core/testing';

import { FiledbServiceService } from './filedb-service.service';

describe('FiledbServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiledbServiceService]
    });
  });

  it('should be created', inject([FiledbServiceService], (service: FiledbServiceService) => {
    expect(service).toBeTruthy();
  }));
});
