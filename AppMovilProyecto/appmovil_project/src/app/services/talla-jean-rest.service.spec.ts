import { TestBed } from '@angular/core/testing';

import { TallaJeanRestService } from './talla-jean-rest.service';

describe('TallaJeanRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TallaJeanRestService = TestBed.get(TallaJeanRestService);
    expect(service).toBeTruthy();
  });
});
