import { TestBed } from '@angular/core/testing';

import { KMDataService } from './km-data.service';

describe('KMDataService', () => {
  let service: KMDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KMDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
