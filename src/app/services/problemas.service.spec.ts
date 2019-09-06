import { TestBed } from '@angular/core/testing';

import { ProblemasService } from './problemas.service';

describe('ProblemasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProblemasService = TestBed.get(ProblemasService);
    expect(service).toBeTruthy();
  });
});
