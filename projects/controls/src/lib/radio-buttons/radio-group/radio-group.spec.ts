import { RadioGroupComponent } from './radio-group.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { timer } from 'rxjs';
import { RadioButtonComponent } from '@airy-ui/controls';

@Component({
  selector: 'air-radio-group-test',
  template: `
    <air-radio-group value="first">
      <air-radio-button *ngIf="timer$ | async" value="first">First</air-radio-button>
      <air-radio-button value="second">Second</air-radio-button>
    </air-radio-group>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class RadioGroupTestComponent {
  timer$ = timer(1000).pipe(take(1), map(() => true));
  @ViewChild(RadioGroupComponent) group!: RadioGroupComponent;
}

describe('RadioGroupComponent', () => {
  beforeEach(() => {
    MockBuilder([RadioGroupComponent, RadioButtonComponent, RadioGroupTestComponent]);
  });

  it('set value with async buttons', () => {
    const fixture = MockRender(RadioGroupTestComponent);
  });
});
