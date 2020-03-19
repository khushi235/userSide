import { TestBed } from '@angular/core/testing';

import { StudentdataService } from './studentdata.service';

describe('StudentdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentdataService = TestBed.get(StudentdataService);
    expect(service).toBeTruthy();
  });
});
