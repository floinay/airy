import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const directivesByName: { [key: string]: TableLikeCellDirective[] } = {};
const widthsByName: { [key: string]: number } = {};
let reCalcSubInit = false;
const clearWidths = () => Object.keys(widthsByName).forEach((name) => widthsByName[name] = 0);
const markForCheck = () => {
  for (const value of Object.values(directivesByName)) {
    value.forEach(d => d.cdr.markForCheck());
  }
};
const reCalcWidth = () => {
  clearWidths();
  markForCheck();
  setTimeout(() => {
    for (const value of Object.values(directivesByName)) {
      value.forEach(d => {
        d.setWidth();
        d.cdr.markForCheck();
      });
    }
  });
};
export const listenResize = (window: Window) => {
  if (!reCalcSubInit) {
    fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => reCalcWidth());
    reCalcSubInit = true;
  }

};

@Directive({
  selector: '[airTableLikeCell]'
})
export class TableLikeCellDirective implements OnInit, OnDestroy {
  private lastWidth = 0;
  @Input('airTableLikeCell') name!: string;
  private initialized = false;

  @HostBinding('style.width')
  get maxWidth(): string {
    return this.initialized && widthsByName[this.name] ? widthsByName[this.name] + 'px' : 'auto';
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  get nativeWidth(): number {
    this.lastWidth = Math.ceil(this.nativeElement.getBoundingClientRect().width);
    return this.lastWidth;
  }

  constructor(private elementRef: ElementRef, public cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.append();
      this.setWidth();
    });
  }

  public setWidth(): void {
    const width = this.nativeWidth;
    if (!(this.name in widthsByName) || widthsByName[this.name] < width) {
      widthsByName[this.name] = width;
    }
    this.initialized = true;
    this.cdr.markForCheck();
  }

  private append(this: TableLikeCellDirective): void {
    if (!(this.name in directivesByName)) {
      directivesByName[this.name] = [];
    }

    directivesByName[this.name].push(this);
  }

  ngOnDestroy(): void {
    directivesByName[this.name] = directivesByName[this.name].filter(d => d !== this);
    if (this.lastWidth === widthsByName[this.name]) {
      reCalcWidth();
    }
  }
}
