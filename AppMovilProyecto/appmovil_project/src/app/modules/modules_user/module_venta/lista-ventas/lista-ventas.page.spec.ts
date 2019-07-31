import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentasPage } from './lista-ventas.page';

describe('ListaVentasPage', () => {
  let component: ListaVentasPage;
  let fixture: ComponentFixture<ListaVentasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVentasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
