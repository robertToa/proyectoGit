import { TestBed } from '@angular/core/testing';

import { CabeceraCompraRestService } from './cabecera-compra-rest.service';

describe('CabeceraCompraRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CabeceraCompraRestService = TestBed.get(CabeceraCompraRestService);
    expect(service).toBeTruthy();
  });
});
