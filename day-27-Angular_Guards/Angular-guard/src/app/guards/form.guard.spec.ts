import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { formGuard } from './form.guard';

describe('formGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
