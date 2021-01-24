import {Directive, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {getValuesFromSimpleChanges} from '../../helpers';
import {BreakpointsStylesManagerFactory} from '../../services';

@Directive()
export abstract class AbstractIndentsDirective implements OnChanges, OnDestroy {
  private sub?: Subscription;
  protected bpStylesManager = this.bpStylesFactory.make();

  constructor(protected bpStylesFactory: BreakpointsStylesManagerFactory) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }

    this.bpStylesManager.style(getValuesFromSimpleChanges(changes));

    if (this.bpStylesManager.hasBreakpoints()) {
      this.sub = this.bpStylesManager.listen().subscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}

