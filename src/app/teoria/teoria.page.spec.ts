import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaPage } from './teoria.page';

describe('TeoriaPage', () => {
  let component: TeoriaPage;
  let fixture: ComponentFixture<TeoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
