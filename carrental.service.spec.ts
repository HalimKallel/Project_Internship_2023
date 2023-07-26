import { TestBed } from '@angular/core/testing';

import { CarrentalService } from './carrental.service';

describe('CarrentalService', () => {
  let service: CarrentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
