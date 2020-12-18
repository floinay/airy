import { Directive, ElementRef, HostBinding } from '@angular/core';
import { CanDisabledCtor, CanSizeCtor, HasElementRef, mixinDisabled, mixinSize } from '@airy-ui/cdk';

const ControlBase: CanDisabledCtor & CanSizeCtor = mixinSize(mixinDisabled(HasElementRef));

@Directive({
  selector: 'input[airInput], textarea[airTextarea]',
  exportAs: 'control',
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['disabled', 'size'],
})
export class InputDirective extends ControlBase {
  @HostBinding('class') get class(): string {
    return this.elementRef.nativeElement.hasAttribute('airInput') ? 'air-input' : 'air-textarea';
  }

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}
