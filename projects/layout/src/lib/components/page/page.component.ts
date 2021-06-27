import {AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef,} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EndDirective, FooterDirective, HeaderDirective, StartDirective} from '../../directives';
import {StickyDirective} from '../../interfaces';
import {DirectionService} from '@airy-ui/direction';
import {BREAKPOINT_VALUES} from '@airy-ui/cdk';

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

  constructor(private elementRef: ElementRef,
              private directionService: DirectionService,
              private breakpointObserver: BreakpointObserver) {
  }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe(BREAKPOINT_VALUES)
      .pipe(untilDestroyed(this)).subscribe(() => {
      this.offsets();
      this.startEndSum();
    });
  }

  private startEndSum(): void {
    const start = this.start?.offset || 0;
    const end = this.end?.offset || 0;
    this.elementRef.nativeElement.style.setProperty('--page-start-end-sum', String(start + end) + 'px');
  }

  private offsets(): void {
    this.offset('start', this.start);
    this.offset('end', this.end);
    this.offset('header', this.header);
    this.offset('footer', this.footer);
  }

  private offset(name: OffsetName, directive: StickyDirective | undefined): void {
    if (directive) {
      if (directive.sticky) {
        this.elementRef.nativeElement.style.setProperty(`--${name}__offset-sticky`, directive.offset + 'px');
      } else {
        this.elementRef.nativeElement.style.setProperty(`--${name}__offset`, directive.offset + 'px');
      }
    }
  }
}
