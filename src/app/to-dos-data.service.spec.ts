import { TestBed } from '@angular/core/testing';

import { ToDosDataService } from './to-dos-data.service';

describe('ToDosDataService', () => {
  let service: ToDosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
