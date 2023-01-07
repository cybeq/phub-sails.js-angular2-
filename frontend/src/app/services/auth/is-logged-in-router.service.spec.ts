import { TestBed } from '@angular/core/testing';

import { IsLoggedInRouterService } from './is-logged-in-router.service';

describe('IsLoggedInRouterService', () => {
  let service: IsLoggedInRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoggedInRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
