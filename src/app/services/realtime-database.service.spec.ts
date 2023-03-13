import { TestBed } from '@angular/core/testing';

import { RealtimeDatabaseService } from './realtime-database.service';

describe('RealtimeDatabaseService', () => {
  let service: RealtimeDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimeDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
