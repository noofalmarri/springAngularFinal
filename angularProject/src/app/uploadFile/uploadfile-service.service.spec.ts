import { TestBed, inject } from '@angular/core/testing';

import { UploadfileServiceService } from './uploadfile-service.service';

describe('UploadfileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadfileServiceService]
    });
  });

  it('should be created', inject([UploadfileServiceService], (service: UploadfileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
