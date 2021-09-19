import {Directive, ElementRef} from '@angular/core';
import {CanSizeCtor, HasElementRef, mixinSize} from '@airy-ui/cdk';

const AvatarBase: CanSizeCtor = mixinSize(HasElementRef);


@Directive({
  selector: '[airAvatar]',
  inputs: ['size'],
  host: {
    '[class.air-avatar]': `true`,
    '[style.border-radius]': `'var(--border-radius, 100%)'`
  }
})
export class AvatarDirective extends AvatarBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
