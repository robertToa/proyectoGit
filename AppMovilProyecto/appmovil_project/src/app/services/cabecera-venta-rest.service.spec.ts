import { TestBed } from '@angular/core/testing';

import { CabeceraVentaRestService } from './cabecera-venta-rest.service';

describe('CabeceraVentaRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CabeceraVentaRestService = TestBed.get(CabeceraVentaRestService);
    expect(service).toBeTruthy();
  });
});
