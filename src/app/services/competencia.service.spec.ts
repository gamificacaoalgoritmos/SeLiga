import { TestBed } from '@angular/core/testing';

import { CompetenciaService } from './competencia.service';

describe('CompetenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetenciaService = TestBed.get(CompetenciaService);
    expect(service).toBeTruthy();
  });
});
