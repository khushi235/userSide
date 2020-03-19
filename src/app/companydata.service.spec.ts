import { TestBed } from '@angular/core/testing';

import { CompanydataService } from './companydata.service';

describe('CompanydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanydataService = TestBed.get(CompanydataService);
    expect(service).toBeTruthy();
  });
});
