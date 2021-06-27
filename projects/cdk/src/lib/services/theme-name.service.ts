import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({providedIn: 'root'})
export class ThemeNameService {
  private currentName?: string;

  constructor(@Inject(DOCUMENT) readonly document: Document) {
  }

  set(name: string): void {
    if (name !== this.currentName) {
      this.removePrevious();
      this.currentName = name;
      this.document.body.classList.add(this.currentName);
    }
  }

  private removePrevious() {
    if (this.currentName) {
      this.document.body.classList.remove(this.currentName);
    }
  }
}
