import { TestBed, inject } from '@angular/core/testing';

import { JewelryService } from './jewelry.service';

describe('JewelryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JewelryService]
    });
  });

  it('should ...', inject([JewelryService], (service: JewelryService) => {
    expect(service).toBeTruthy();
  }));
});
