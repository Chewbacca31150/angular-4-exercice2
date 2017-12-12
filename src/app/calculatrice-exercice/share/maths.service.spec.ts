import { TestBed, inject } from '@angular/core/testing';

import { MathsService } from './maths.service';

describe('MathsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathsService]
    });
  });

  it('should be created', inject([MathsService], (service: MathsService) => {
    expect(service).toBeTruthy();
  }));
});
