import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasPage } from './problemas.page';

describe('ProblemasPage', () => {
  let component: ProblemasPage;
  let fixture: ComponentFixture<ProblemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
