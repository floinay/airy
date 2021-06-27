import {ElementRef, Injectable} from '@angular/core';

@Injectable()
export class ClassesService {
  constructor(private elementRef: ElementRef<HTMLDivElement>) {
  }

  add(names: string[]): void {
    this.elementRef.nativeElement.classList.add(...names);
  }

  remove(names: string[]) {
    this.elementRef.nativeElement.classList.remove(...names);
  }
}
