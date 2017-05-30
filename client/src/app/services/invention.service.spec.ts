import { TestBed, inject } from '@angular/core/testing';

import { InventionService } from './invention.service';

describe('InventionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventionService]
    });
  });

  it('should ...', inject([InventionService], (service: InventionService) => {
    expect(service).toBeTruthy();
  }));
});
