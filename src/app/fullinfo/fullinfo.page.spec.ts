import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullinfoPage } from './fullinfo.page';

describe('FullinfoPage', () => {
  let component: FullinfoPage;
  let fixture: ComponentFixture<FullinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
