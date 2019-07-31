import { TestBed } from '@angular/core/testing';

import { DetalleCompraRestService } from './detalle-compra-rest.service';

describe('DetalleCompraRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleCompraRestService = TestBed.get(DetalleCompraRestService);
    expect(service).toBeTruthy();
  });
});
