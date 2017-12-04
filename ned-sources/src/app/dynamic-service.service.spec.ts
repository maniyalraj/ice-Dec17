import { TestBed, inject } from '@angular/core/testing';

import { DynamicServiceService } from './dynamic-service.service';

describe('DynamicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicServiceService]
    });
  });

  it('should be created', inject([DynamicServiceService], (service: DynamicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
