import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stat2Page } from './stat2.page';

describe('Stat2Page', () => {
  let component: Stat2Page;
  let fixture: ComponentFixture<Stat2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stat2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stat2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
