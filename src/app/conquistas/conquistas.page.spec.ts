import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConquistasPage } from './conquistas.page';

describe('ConquistasPage', () => {
  let component: ConquistasPage;
  let fixture: ComponentFixture<ConquistasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConquistasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConquistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
