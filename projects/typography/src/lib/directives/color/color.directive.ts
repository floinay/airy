import {Directive, ElementRef, Input} from '@angular/core';
import {ThemePalette} from '@airy-ui/cdk';

type Color = ThemePalette | 'text-primary' | 'text-secondary';

@Directive({selector: '[airColor]'})
export class ColorDirective {
  private previousColor: Color = 'text-primary';

  @Input() set airColor(color: Color) {
    if (this.previousColor) {
      this.elementRef.nativeElement.classList.remove(`air-tp-color-${this.previousColor}`);
    }

    this.elementRef.nativeElement.classList.add(`air-tp-color-${color}`);
    this.previousColor = color;
  }

  constructor(private elementRef: ElementRef) {
  }
}
