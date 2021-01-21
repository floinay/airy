import {ElementRef, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StylesService {
  constructor(private elementRef: ElementRef<HTMLDivElement>) {
  }

  style(properties: Partial<CSSStyleDeclaration>): void {
    Object.entries(properties).forEach(
      ([key, value]) => this.elementRef.nativeElement.style.setProperty(key, value as string)
    );
  }

  remove(properties: Array<keyof CSSStyleDeclaration>): void {
    properties.forEach(property => this.elementRef.nativeElement.style.removeProperty(property as string));
  }
}
