import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[airTextStart], [airTextEnd], [airTextCenter]'
})
export class TextDirectionDirective {
  private hasAttribute(attribute: string): boolean {
    return this.elementRef.nativeElement.hasAttribute(attribute);
  }

  @HostBinding('style.text-align')
  get textAlign(): string {
    if (this.hasAttribute('airTextStart')) {
      return 'left';
    }

    if (this.hasAttribute('airTextEnd')) {
      return 'right';
    }

    return 'center';
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
  }

}
