import {Directive, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BreakpointsStylesManager} from '../../services';
import {ChangesState} from '../../services/changes.state';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@Directive()
@UntilDestroy()
export abstract class AbstractIndentsDirective implements OnChanges, OnInit {
  constructor(protected stylesManager: BreakpointsStylesManager, protected changesState: ChangesState<string, string>) {
  }


  ngOnInit(): void {
    this.stylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }
}

