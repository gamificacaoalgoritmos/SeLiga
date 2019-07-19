import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciasPage } from './competencias.page';

describe('CompetenciasPage', () => {
  let component: CompetenciasPage;
  let fixture: ComponentFixture<CompetenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
