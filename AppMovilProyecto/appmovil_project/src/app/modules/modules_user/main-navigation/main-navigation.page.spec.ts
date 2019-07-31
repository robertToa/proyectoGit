import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationPage } from './main-navigation.page';

describe('MainNavigationPage', () => {
  let component: MainNavigationPage;
  let fixture: ComponentFixture<MainNavigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavigationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
