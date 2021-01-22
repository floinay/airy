import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';
import {HeaderDirective} from '../../directives/header/header.directive';
import {FooterDirective} from '../../directives/footer/footer.directive';
import {StickyDirective} from '../../interfaces/sticky-directive';
import {StartDirective} from '../../directives/start/start.directive';
import {EndDirective} from '../../directives/end/end.directive';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BreakpointsHelper} from '@airy-ui/cdk';

type OffsetName = 'header' | 'footer' | 'end' | 'start';

@Component({
  selector: 'air-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class PageComponent implements AfterViewInit {
  @ContentChild(StartDirective) start?: StartDirective;
  @ContentChild(EndDirective) end?: EndDirective;
  @ContentChild(HeaderDirective) header?: HeaderDirective;
  @ContentChild(FooterDirective) footer?: FooterDirective;

  constructor(private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) {
  }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe(BreakpointsHelper.values())
      .pipe(untilDestroyed(this)).subscribe(() => this.offsets());
  }

  private offsets(): void {
    this.offset('start', this.start);
    this.offset('end', this.end);
    this.offset('header', this.header);
    this.offset('footer', this.footer);
  }

  private offset(name: OffsetName, directive: StickyDirective | undefined): void {
    if (directive?.sticky) {
      this.elementRef.nativeElement.style.setProperty(`--${name}__offset`, directive.offset + 'px');
    }
  }
}
