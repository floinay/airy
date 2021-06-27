import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {CanColorCtor, HasElementRef, mixinColor} from '../../../../cdk/src/lib';

const NavBase: CanColorCtor = mixinColor(HasElementRef, 'primary');

@Component({
  selector: 'air-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent extends NavBase {
  constructor(private elementRef: ElementRef<HTMLElement>) {
    super(elementRef, 'default');
  }
}
