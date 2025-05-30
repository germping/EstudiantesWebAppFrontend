import { TestBed } from '@angular/core/testing';

import { RelationsAppService } from './relations-app.service';

describe('RelationsAppService', () => {
  let service: RelationsAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationsAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
