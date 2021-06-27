import {TestBed} from '@angular/core/testing';

import {FakeDirectionDispatcherService} from './fake-direction-dispatcher.service';

describe('FakeDirectionDispatcherService', () => {
  let service: FakeDirectionDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeDirectionDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
