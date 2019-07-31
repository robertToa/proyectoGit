import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarIngreEgrePage } from './visualizar-ingre-egre.page';

describe('VisualizarIngreEgrePage', () => {
  let component: VisualizarIngreEgrePage;
  let fixture: ComponentFixture<VisualizarIngreEgrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarIngreEgrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarIngreEgrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
