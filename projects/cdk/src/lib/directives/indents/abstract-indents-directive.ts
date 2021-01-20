import {Directive, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {BreakpointsStylesManager} from '../../styles/breakpoints-styles.manager';
import {getValuesFromSimpleChanges} from '../../helpers/get-values-from-simple-changes';

@Directive()
export abstract class AbstractIndentsDirective implements OnChanges, OnDestroy {
  private sub?: Subscription;

  constructor(protected bpStylesManager: BreakpointsStylesManager) {
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

