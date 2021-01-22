import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input, OnDestroy,
  Output
} from '@angular/core';

import {ExpansionHeaderComponent} from '../expansion-header/expansion-header.component';
import {Subscription} from 'rxjs';
import {bodyExpansion} from '../../expansion-animtaions';

@Component({
  selector: 'air-expansion, [air-expansion]',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    bodyExpansion
  ]
})
export class ExpansionComponent implements AfterViewInit, OnDestroy {
  private headerSub?: Subscription;
  status = false;
  @ContentChild(ExpansionHeaderComponent) header?: ExpansionHeaderComponent;

  @Input('status') set _status(status: boolean) {
    if (this.header) {
      this.setStatus(status);
    } else {
      this.initialStatus = status;
    }
  }

  private initialStatus = false;

  @Output() statusChange = new EventEmitter<boolean>();
  @Input() disabled = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    if (this.initialStatus !== this.status) {
      this.setStatus(this.initialStatus);
    }
    if (!this.disabled && this.header) {
      this.headerSub = this.header.onClick.subscribe(() => {
        this.setStatus(!this.status);
      });
    }
  }

  private setStatus(status: boolean): void {
    this.status = status;
    if (this.header) {
      this.header.status = status;
    }
    this.statusChange.emit(status);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.headerSub) {
      this.headerSub.unsubscribe();
    }
  }

}
