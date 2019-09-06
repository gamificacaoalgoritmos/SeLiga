import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaPage } from './competencia.page';

describe('CompetenciaPage', () => {
  let component: CompetenciaPage;
  let fixture: ComponentFixture<CompetenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
