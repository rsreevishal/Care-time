import { TestBed } from '@angular/core/testing';

import { AuthenticateServiceService } from './authenticate-service.service';

describe('AuthenticateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateServiceService = TestBed.get(AuthenticateServiceService);
    expect(service).toBeTruthy();
  });
});
