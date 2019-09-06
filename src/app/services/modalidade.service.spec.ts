import { TestBed } from '@angular/core/testing';

import { ModalidadeService } from './modalidade.service';

describe('ModalidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalidadeService = TestBed.get(ModalidadeService);
    expect(service).toBeTruthy();
  });
});
