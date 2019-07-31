import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearItemCompraPage } from './crear-item-compra.page';

describe('CrearItemCompraPage', () => {
  let component: CrearItemCompraPage;
  let fixture: ComponentFixture<CrearItemCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearItemCompraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearItemCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
