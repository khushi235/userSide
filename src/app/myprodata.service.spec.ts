import { TestBed } from '@angular/core/testing';

import { MyprodataService } from './myprodata.service';

describe('MyprodataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyprodataService = TestBed.get(MyprodataService);
    expect(service).toBeTruthy();
  });
});
