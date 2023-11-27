import { TestBed } from '@angular/core/testing';

import { GetSetValueService } from './get-set-value.service';

describe('GetSetValueService', () => {
  let service: GetSetValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSetValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
