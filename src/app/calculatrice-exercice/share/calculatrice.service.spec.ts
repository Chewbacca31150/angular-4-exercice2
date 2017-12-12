import { TestBed, inject } from '@angular/core/testing';

import { CalculatriceService } from './calculatrice.service';

describe('CalculatriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatriceService]
    });
  });

  it('should be created', inject([CalculatriceService], (service: CalculatriceService) => {
    expect(service).toBeTruthy();
  }));
});
