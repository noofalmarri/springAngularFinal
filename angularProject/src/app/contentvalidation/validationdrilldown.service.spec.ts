import { TestBed, inject } from '@angular/core/testing';

import { ValidationdrilldownService } from './validationdrilldown.service';

describe('ValidationdrilldownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationdrilldownService]
    });
  });

  it('should be created', inject([ValidationdrilldownService], (service: ValidationdrilldownService) => {
    expect(service).toBeTruthy();
  }));
});
