import {ElementRef, Injectable} from '@angular/core';
import {camelToKebab} from '../../helpers';
import {StringObject} from '../../types';

@Injectable({providedIn: 'root'})
export class StylesService {
  constructor(private elementRef: ElementRef<HTMLDivElement>) {
  }

  style(properties: StringObject): void {
    Object.entries(properties).forEach(
      ([key, value]) => this.elementRef.nativeElement.style.setProperty(camelToKebab(key), value)
    );
  }

  remove(properties: string[]): void {
    properties.forEach(property => this.elementRef.nativeElement.style.removeProperty(camelToKebab(property)));
  }
}
