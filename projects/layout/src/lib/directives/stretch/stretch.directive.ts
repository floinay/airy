import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[airStretch], [airStretchX], [airStretchY], [airStretchForcibly], [airStretchForciblyX], [airStretchForciblyY]'
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

  @HostBinding('style.min-width')
  get minWidth(): string {
    return (
      this.elementRef.nativeElement.hasAttribute('airStretchForcibly')
      ||
      this.elementRef.nativeElement.hasAttribute('airStretchForciblyX')
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

  @HostBinding('style.min-height')
  get minHeight(): string {
    return (
      this.elementRef.nativeElement.hasAttribute('airStretchForcibly')
      ||
      this.elementRef.nativeElement.hasAttribute('airStretchForciblyY')
    )
      ? '100%' : '';
  }

  constructor(private elementRef: ElementRef) {
  }
}
