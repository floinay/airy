import { Constructor } from '../types/constructor';
import { HasElementRef } from '../types/has-element-ref';

export interface CanSize {
  size: ThemeSizes;
}

export type CanSizeCtor = Constructor<CanSize>;

export type ThemeSizes = 'sm' | 'md' | 'lg' | undefined | '';


export function mixinSize<T extends Constructor<HasElementRef>>(base: T): CanSizeCtor & T {
  return class extends base {
    // tslint:disable-next-line:variable-name
    private _size: ThemeSizes;

    get size(): ThemeSizes {
      return this._size;
    }

    set size(size: ThemeSizes) {
      if (size !== this._size) {
        if (this._size) {
          this._elementRef.nativeElement.classList.remove(`size-${this._size}`);
        }

        if (size) {
          this._elementRef.nativeElement.classList.add(`size-${size}`);
        }

        this._size = size;
      }
    }
  };
}
