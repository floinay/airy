import {Directive, ElementRef, HostBinding} from '@angular/core';
import {CanDisabledCtor, HasElementRef, mixinDisabled} from '../../cdk';

const ControlBase: CanDisabledCtor = mixinDisabled(HasElementRef);

@Directive({
  selector: 'input[airInput], textarea[airTextarea], input[airInvisibleInput], textarea[airInvisibleTextarea]',
  exportAs: 'control',
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['disabled'],
})
export class InputDirective extends ControlBase {
  @HostBinding('class.air-input') get isInput(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airInput');
  }

  @HostBinding('class.air-textarea') get isTextarea(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airTextArea');
  }

  @HostBinding('class.air-invisible-textarea') get isInvisibleTextArea(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airInvisibleTextarea');
  }

  @HostBinding('class.air-invisible-input') get isInvisibleTextInput(): boolean {
    return this.elementRef.nativeElement.hasAttribute('airInvisibleInput');
  }

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}
