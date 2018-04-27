import { TestBed, inject } from '@angular/core/testing';

import { SlowaService } from './slowa.service';

describe('SlowaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlowaService]
    });
  });

  it('should be created', inject([SlowaService], (service: SlowaService) => {
    expect(service).toBeTruthy();
  }));
});
