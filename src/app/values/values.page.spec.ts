import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesPage } from './values.page';

describe('ValuesPage', () => {
  let component: ValuesPage;
  let fixture: ComponentFixture<ValuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
