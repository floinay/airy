import {Directive, OnChanges, SimpleChanges} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BreakpointsStylesManager, ChangesState} from '@airy-ui/cdk';

@Directive()
@UntilDestroy()
export abstract class AbstractIndentsDirective implements OnChanges {
  constructor(protected stylesManager: BreakpointsStylesManager, protected changesState: ChangesState<string, string>) {
    this.stylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }
}

