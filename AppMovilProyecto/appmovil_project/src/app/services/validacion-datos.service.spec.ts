import { TestBed } from '@angular/core/testing';

import { ValidacionDatosService } from './validacion-datos.service';

describe('ValidacionDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidacionDatosService = TestBed.get(ValidacionDatosService);
    expect(service).toBeTruthy();
  });
});
