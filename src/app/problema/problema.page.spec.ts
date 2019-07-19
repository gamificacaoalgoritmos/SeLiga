import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaPage } from './problema.page';

describe('ProblemaPage', () => {
  let component: ProblemaPage;
  let fixture: ComponentFixture<ProblemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
