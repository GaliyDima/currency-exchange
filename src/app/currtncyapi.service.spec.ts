import { TestBed } from '@angular/core/testing';

import { CurrtncyapiService } from './headerapi.service';

describe('CurrtncyapiService', () => {
  let service: CurrtncyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrtncyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
