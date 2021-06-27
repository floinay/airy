import {Directive, HostBinding, Input} from '@angular/core';
import {portalContainerId} from '../../../../../../cdk/src/lib';


@Directive({
  selector: '[airHeaderContainer]'
})
export class HeaderContainerDirective {
  @Input() airHeaderContainerName = 'default';

  @HostBinding('attr.id') get id(): string {
    return portalContainerId(this.airHeaderContainerName, 'header');
  }
}
