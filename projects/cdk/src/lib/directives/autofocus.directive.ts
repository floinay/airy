import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({selector: '[airAutofocus]'})
export class AutofocusDirective implements OnInit {
  @Input() autofocus?: boolean;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.autofocus !== false) {
        this.elementRef.nativeElement.focus();
      }
    });
  }

}
