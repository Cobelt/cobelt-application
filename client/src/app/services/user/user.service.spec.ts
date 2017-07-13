import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { Http } from '../http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, Http]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
