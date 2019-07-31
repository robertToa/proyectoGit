import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoPage } from './create-tipo.page';

describe('CreateTipoPage', () => {
  let component: CreateTipoPage;
  let fixture: ComponentFixture<CreateTipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTipoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
