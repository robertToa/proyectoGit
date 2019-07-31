import { TestBed } from '@angular/core/testing';

import { RaspberryRestService } from './raspberry-rest.service';

describe('RaspberryRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaspberryRestService = TestBed.get(RaspberryRestService);
    expect(service).toBeTruthy();
  });
});
