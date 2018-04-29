import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { CounterService } from './counter.service';

describe('UsersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, CounterService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
