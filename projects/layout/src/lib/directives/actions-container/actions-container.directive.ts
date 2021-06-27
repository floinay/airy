import {Directive, HostBinding, Input} from '@angular/core';
import {portalContainerId} from '@airy-ui/cdk';

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
