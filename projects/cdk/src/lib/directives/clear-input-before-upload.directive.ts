import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'input[airClearBeforeUpload]'
})
export class ClearInputBeforeUploadDirective {
  @HostListener('click') onClick(): void {
    this.elementRef.nativeElement.value = null;
  }

  constructor(private elementRef: ElementRef) {
  }
}
