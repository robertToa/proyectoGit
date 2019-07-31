import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJeanPage } from './create-jean.page';

describe('CreateJeanPage', () => {
  let component: CreateJeanPage;
  let fixture: ComponentFixture<CreateJeanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJeanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJeanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
