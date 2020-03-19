import { TestBed } from '@angular/core/testing';

import { EventdataService } from './eventdata.service';

describe('EventdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventdataService = TestBed.get(EventdataService);
    expect(service).toBeTruthy();
  });
});
