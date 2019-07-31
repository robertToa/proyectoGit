import { TestBed } from '@angular/core/testing';

import { JeanRestService } from './jean-rest.service';

describe('JeanRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JeanRestService = TestBed.get(JeanRestService);
    expect(service).toBeTruthy();
  });
});
