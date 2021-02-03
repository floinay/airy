import {Directive, HostBinding} from '@angular/core';

@Directive({selector: '[airContent]'})
export class ContentDirective {
  @HostBinding('class.air-content') contentClass = true;
}
