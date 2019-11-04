import { TestBed } from '@angular/core/testing';

import { LoadimageService } from './loadimage.service';

describe('LoadimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadimageService = TestBed.get(LoadimageService);
    expect(service).toBeTruthy();
  });
});
