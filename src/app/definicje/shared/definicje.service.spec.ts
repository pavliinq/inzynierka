import { TestBed, inject } from '@angular/core/testing';

import { DefinicjeService } from './definicje.service';

describe('DefinicjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefinicjeService]
    });
  });

  it('should be created', inject([DefinicjeService], (service: DefinicjeService) => {
    expect(service).toBeTruthy();
  }));
});
