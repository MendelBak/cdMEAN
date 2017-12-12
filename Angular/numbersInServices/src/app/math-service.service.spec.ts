import { TestBed, inject } from '@angular/core/testing';

import { MathServiceService } from './math-service.service';

describe('MathServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathServiceService]
    });
  });

  it('should be created', inject([MathServiceService], (service: MathServiceService) => {
    expect(service).toBeTruthy();
  }));
});
