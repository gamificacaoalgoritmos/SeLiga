import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplificacaoPage } from './exemplificacao.page';

describe('ExemplificacaoPage', () => {
  let component: ExemplificacaoPage;
  let fixture: ComponentFixture<ExemplificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplificacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
