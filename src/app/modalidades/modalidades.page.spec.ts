import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesPage } from './modalidades.page';

describe('ModalidadesPage', () => {
  let component: ModalidadesPage;
  let fixture: ComponentFixture<ModalidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
