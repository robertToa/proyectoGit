import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTallaPage } from './create-talla.page';

describe('CreateTallaPage', () => {
  let component: CreateTallaPage;
  let fixture: ComponentFixture<CreateTallaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTallaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTallaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
