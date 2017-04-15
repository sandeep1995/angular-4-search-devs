import { TestBed, inject } from '@angular/core/testing';

import { SerachUsersService } from './serach-users.service';

describe('SerachUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerachUsersService]
    });
  });

  it('should ...', inject([SerachUsersService], (service: SerachUsersService) => {
    expect(service).toBeTruthy();
  }));
});
