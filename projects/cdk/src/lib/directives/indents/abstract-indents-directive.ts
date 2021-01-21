import {Directive, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {BreakpointsStylesService} from '../../services/styles/breakpoints-styles.service';
import {getValuesFromSimpleChanges} from '../../helpers/get-values-from-simple-changes';

@Directive()
export abstract class AbstractIndentsDirective implements OnChanges, OnDestroy {
  private sub?: Subscription;

  constructor(protected bpStylesManager: BreakpointsStylesService) {
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

