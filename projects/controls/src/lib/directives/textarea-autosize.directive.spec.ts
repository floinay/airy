import { TextareaAutosizeDirective } from './textarea-autosize.directive';
import { TestBed } from '@angular/core/testing';
import { RadioButtonComponent } from '../radio-buttons';
import { Text } from '@angular/compiler';

describe('TextareaAutosizeDirective', () => {
  let directive: TextareaAutosizeDirective;
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [TextareaAutosizeDirective]});
    directive = TestBed.inject(TextareaAutosizeDirective);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
