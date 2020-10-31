import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalhaPage } from './medalha.page';

describe('MedalhaPage', () => {
  let component: MedalhaPage;
  let fixture: ComponentFixture<MedalhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
