import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCRUDPage } from './pagina-crud.page';

describe('PaginaCRUDPage', () => {
  let component: PaginaCRUDPage;
  let fixture: ComponentFixture<PaginaCRUDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCRUDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCRUDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
