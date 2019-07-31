import { TestBed } from '@angular/core/testing';

import { TipoJeanRestService } from './tipo-jean-rest.service';

describe('TipoJeanRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoJeanRestService = TestBed.get(TipoJeanRestService);
    expect(service).toBeTruthy();
  });
});
