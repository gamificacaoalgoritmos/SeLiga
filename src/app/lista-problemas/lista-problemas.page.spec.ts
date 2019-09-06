import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProblemasPage } from './lista-problemas.page';

describe('ListaProblemasPage', () => {
  let component: ListaProblemasPage;
  let fixture: ComponentFixture<ListaProblemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProblemasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProblemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
