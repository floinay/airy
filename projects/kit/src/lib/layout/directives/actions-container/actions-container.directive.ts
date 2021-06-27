import {Directive, HostBinding, Input} from '@angular/core';
import {portalContainerId} from '../../../../../../cdk/src/lib';

@Directive({
  selector: '[airActionsContainer]'
})
export class ActionsContainerDirective {
  @Input() airActionsContainerName = 'default';

  @HostBinding('attr.id')
  get id(): string {
    return portalContainerId(this.airActionsContainerName, 'actions');
  }

}
