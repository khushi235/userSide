import { TestBed } from '@angular/core/testing';

import { NoticedataService } from './noticedata.service';

describe('NoticedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticedataService = TestBed.get(NoticedataService);
    expect(service).toBeTruthy();
  });
});
