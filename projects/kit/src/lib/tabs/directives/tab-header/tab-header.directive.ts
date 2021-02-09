import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[airTabHeader]'
})
export class TabHeaderDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
