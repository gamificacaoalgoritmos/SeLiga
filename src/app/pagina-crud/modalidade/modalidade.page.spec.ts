import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadePage } from './modalidade.page';

describe('ModalidadePage', () => {
  let component: ModalidadePage;
  let fixture: ComponentFixture<ModalidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
