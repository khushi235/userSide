import { TestBed } from '@angular/core/testing';

import { MaterialserviceService } from './materialservice.service';

describe('MaterialserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialserviceService = TestBed.get(MaterialserviceService);
    expect(service).toBeTruthy();
  });
});
