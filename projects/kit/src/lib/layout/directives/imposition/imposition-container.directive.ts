import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[airImpositionContainer]'
})
export class ImpositionContainerDirective {
  @HostBinding('style.position') position = 'relative';

  @HostBinding('style.max-width') maxWidth = '100%';
}

