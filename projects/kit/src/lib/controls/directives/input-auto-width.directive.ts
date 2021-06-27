import {Directive, DoCheck, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'input[airInputAutoWidth]'
})
export class InputAutoWidthDirective implements DoCheck {
  @HostListener('input')
  onInput() {

  }

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
  }

  ngDoCheck(): void {
    this.elementRef.nativeElement.style.width = this.elementRef.nativeElement.value.length + 1 + 'ch';
  }

}
