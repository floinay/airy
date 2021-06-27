import {TestBed} from '@angular/core/testing';

import {ActiveDirectionDispatcherService} from './active-direction-dispatcher.service';

describe('ActiveDirectionDispatcherService', () => {
  let service: ActiveDirectionDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveDirectionDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
