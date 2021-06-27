import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[airTheme]'
})
export class ThemeDirective {
  private previousTheme?: string;

  @Input() set airTheme(theme: string) {
    if (this.previousTheme) {
      this.elementRef.nativeElement.classList.remove(this.previousTheme);
    }
    this.elementRef.nativeElement.classList.add(theme);
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
  }

}
