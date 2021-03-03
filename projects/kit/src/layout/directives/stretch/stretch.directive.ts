import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[airStretch], [airStretchX], [airStretchY]'
})
export class StretchDirective {
  @HostBinding('style.width')
  get width(): string {
    return (
      this.elementRef.nativeElement.hasAttribute('airStretch')
      ||
      this.elementRef.nativeElement.hasAttribute('airStretchX')
    )
      ? '100%' : '';
  }

  @HostBinding('style.height')
  get height(): string {
    return (
      this.elementRef.nativeElement.hasAttribute('airStretch')
      ||
      this.elementRef.nativeElement.hasAttribute('airStretchY')
    )
      ? '100%' : '';
  }

  constructor(private elementRef: ElementRef) {
  }
}
