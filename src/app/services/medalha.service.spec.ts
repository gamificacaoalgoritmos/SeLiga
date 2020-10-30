import { TestBed } from '@angular/core/testing';

import { MedalhaService } from './medalha.service';

describe('MedalhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedalhaService = TestBed.get(MedalhaService);
    expect(service).toBeTruthy();
  });
});
