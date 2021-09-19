import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {PositionService} from './position.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@Directive({
  selector: '[airFirstOnLine]',
  exportAs: 'firstOnLine'
})
@UntilDestroy()
export class FirstOnLineDirective implements OnInit {
  private previousValue?: boolean;
  @HostBinding('class.air-first-on-line') onFirstLine = false;
  @Output() readonly airFirstOnLineChange = new EventEmitter<boolean>();

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
      this.onFirstLine = this.positionService.firstOnLine(this.elementRef.nativeElement);
      this.cdr.markForCheck();
      if (this.previousValue !== this.onFirstLine) {
        this.airFirstOnLineChange.emit(this.onFirstLine);
        this.previousValue = this.onFirstLine;
      }
    }, 0);
  }

}
