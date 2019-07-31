import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaStockPage } from './lista-stock.page';

describe('ListaStockPage', () => {
  let component: ListaStockPage;
  let fixture: ComponentFixture<ListaStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
