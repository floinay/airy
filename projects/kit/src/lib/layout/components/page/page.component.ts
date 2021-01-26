import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BreakpointsHelper} from '../../../cdk';
import {EndDirective, FooterDirective, HeaderDirective, StartDirective} from '../../directives';
import {StickyDirective} from '../../interfaces';

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
    if (directive) {
      console.log(directive.offset, directive);
      if (directive.sticky) {
        this.elementRef.nativeElement.style.setProperty(`--${name}__offset-sticky`, directive.offset + 'px');
      } else {
        this.elementRef.nativeElement.style.setProperty(`--${name}__offset`, directive.offset + 'px');
      }
    }
  }
}
