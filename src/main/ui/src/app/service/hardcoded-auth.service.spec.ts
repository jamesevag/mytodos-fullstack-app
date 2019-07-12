import { TestBed } from '@angular/core/testing';

import { HardcodedAuthService } from './hardcoded-auth.service';

describe('HardcodedAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthService = TestBed.get(HardcodedAuthService);
    expect(service).toBeTruthy();
  });
});
