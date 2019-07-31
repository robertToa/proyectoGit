import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearItemVentaPage } from './crear-item-venta.page';

describe('CrearItemVentaPage', () => {
  let component: CrearItemVentaPage;
  let fixture: ComponentFixture<CrearItemVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearItemVentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearItemVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
