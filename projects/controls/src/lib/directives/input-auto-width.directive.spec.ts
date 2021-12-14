import { InputAutoWidthDirective } from './input-auto-width.directive';
import { TestBed } from '@angular/core/testing';

describe('InputAutoWidthDirective', () => {
  let directive: InputAutoWidthDirective;
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [InputAutoWidthDirective]});
    directive = TestBed.inject(InputAutoWidthDirective);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
