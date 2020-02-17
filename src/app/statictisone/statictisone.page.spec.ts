import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatictisonePage } from './statictisone.page';

describe('StatictisonePage', () => {
  let component: StatictisonePage;
  let fixture: ComponentFixture<StatictisonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatictisonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatictisonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
