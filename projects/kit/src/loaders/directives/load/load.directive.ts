import {Directive, HostBinding, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadWhenService} from './load-when.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@Directive({
  selector: '[airLoad], [airLoadWhen]',
  exportAs: 'airLoad'
})
@UntilDestroy()
export class LoadDirective {
  private loadFromSubscription?: Subscription;
  @HostBinding('class.air-load')
  @Input() airLoad = false;

  @Input() set airLoadWhen(key: string | Array<string>) {
    if (this.loadFromSubscription) {
      this.loadFromSubscription.unsubscribe();
    }

    this.loadFromSubscription = this.loadFromService.watchLoad$(key)
      .pipe(untilDestroyed(this))
      .subscribe((status: boolean) => {
        this.airLoad = status;
      });
  }

  constructor(private loadFromService: LoadWhenService) {
  }
}
