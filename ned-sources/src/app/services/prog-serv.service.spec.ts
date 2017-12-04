import { TestBed, inject } from '@angular/core/testing';

import { ProgServService } from './prog-serv.service';

describe('ProgServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgServService]
    });
  });

  it('should be created', inject([ProgServService], (service: ProgServService) => {
    expect(service).toBeTruthy();
  }));
});
