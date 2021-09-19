import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {PositionService} from './position.service';

@Directive({
  selector: '[airLastOnLine]'
})
@UntilDestroy()
export class LastOnLineDirective implements OnInit {

  private previousValue?: boolean;
  @HostBinding('class.air-last-on-line') lastOnLine = false;
  @Output() readonly airLastOnLineChange = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef<HTMLElement>,
              private positionService: PositionService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.check();
    this.positionService.watch().pipe(untilDestroyed(this)).subscribe(() => this.check());
  }

  check(): void {
    setTimeout(() => {
      this.lastOnLine = this.positionService.lastOnLine(this.elementRef.nativeElement);
      this.cdr.markForCheck();
      if (this.previousValue !== this.lastOnLine) {
        this.airLastOnLineChange.emit(this.lastOnLine);
        this.previousValue = this.lastOnLine;
      }
    }, 0);
  }

}
