import {ChangeDetectorRef, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Subscription} from 'rxjs';
import {BreakpointName, breakpointValues} from '../../../../../../cdk/src/lib';

@Directive({
  selector: '[airBreakpoints]'
})
@UntilDestroy()
export class BreakpointsDirective {
  private sub?: Subscription;

  @Input() set airBreakpoints(value: BreakpointName[]) {
    this.sub?.unsubscribe();
    this.sub = this.observer.observe(breakpointValues(value))
      .pipe(untilDestroyed(this))
      .subscribe(state => {
        if (state.matches) {
          this.vcr.createEmbeddedView(this.tpl);
          this.cdr.markForCheck();
        } else {
          this.vcr.clear();
        }
      });
  }

  constructor(private tpl: TemplateRef<{}>,
              private vcr: ViewContainerRef,
              private cdr: ChangeDetectorRef,
              private observer: BreakpointObserver) {
  }

}
