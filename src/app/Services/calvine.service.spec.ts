import { TestBed } from '@angular/core/testing';

import { CalvineService } from './calvine.service';

describe('CalvineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalvineService = TestBed.get(CalvineService);
    expect(service).toBeTruthy();
  });
});
