import { TestBed } from '@angular/core/testing';

import { StateColorService } from './state-color.service';

describe('StateColorService', () => {
  let service: StateColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
