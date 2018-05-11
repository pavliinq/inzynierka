import { TestBed, inject } from '@angular/core/testing';

import { KursyService } from './kursy.service';

describe('KursyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KursyService]
    });
  });

  it('should be created', inject([KursyService], (service: KursyService) => {
    expect(service).toBeTruthy();
  }));
});
