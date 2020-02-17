import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePage } from './value.page';

describe('ValuePage', () => {
  let component: ValuePage;
  let fixture: ComponentFixture<ValuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
