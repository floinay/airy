import {Directive, ElementRef, HostBinding} from '@angular/core';
import {CanDisabledCtor, CanSizeCtor, HasElementRef, mixinDisabled, mixinSize} from '../../../../../cdk/src/lib';

const ControlBase: CanDisabledCtor | CanSizeCtor = mixinSize(mixinDisabled(HasElementRef));

@Directive({
  selector: 'input[airInput], textarea[airTextarea], input[airInvisibleInput], textarea[airInvisibleTextarea]',
  exportAs: 'control',
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['disabled', 'size'],
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
