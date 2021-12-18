import { TestBed } from '@angular/core/testing';

import { GlobalPositionStrategyBuilderService } from './global-position-strategy-builder.service';

describe('GlobalPositionStrategyBuilderService', () => {
  let service: GlobalPositionStrategyBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalPositionStrategyBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
