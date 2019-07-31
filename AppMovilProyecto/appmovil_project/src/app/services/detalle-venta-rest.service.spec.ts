import { TestBed } from '@angular/core/testing';

import { DetalleVentaRestService } from './detalle-venta-rest.service';

describe('DetalleVentaRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleVentaRestService = TestBed.get(DetalleVentaRestService);
    expect(service).toBeTruthy();
  });
});
