import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild
} from '@angular/core';
import {OptionsService} from '../../services/options.service';
import {HeaderDirective} from '../../directives/header/header.directive';
import {FooterDirective} from '../../directives/footer/footer.directive';
import {StickyDirective} from '../../interfaces/sticky-directive';
import {StartDirective} from '../../directives/start/start.directive';
import {EndDirective} from '../../directives/end/end.directive';

type OffsetName = 'header' | 'footer' | 'end' | 'start';

@Component({
  selector: 'air-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
  @ContentChild(StartDirective) set start(start: StartDirective | undefined) {
    this.offset('start', start);
  }

  @ContentChild(EndDirective) set end(end: EndDirective | undefined) {
    this.offset('end', end);
  }

  @ContentChild(HeaderDirective) set header(header: HeaderDirective | undefined) {
    this.offset('header', header);
  }

  @ContentChild(FooterDirective) set footer(footer: FooterDirective | undefined) {
    this.offset('footer', footer);
  }

  constructor(private elementRef: ElementRef) {
  }

  private offset(name: OffsetName, directive: StickyDirective | undefined): void {
    this.elementRef.nativeElement.style.setProperty(`--${name}-offset`, directive?.sticky ? directive.offset + 'px' : 0);
  }
}
