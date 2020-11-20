import { Constructor } from '../types/constructor';
import { HasElementRef } from '../types/has-element-ref';
import { CanColor } from '../color/color';

export interface CanSize {
  size: ThemeSizes;

  defaultSize: ThemeSizes;
}

export type CanSizeCtor = Constructor<CanColor>;

export type ThemeSizes = 'sm' | 'md' | 'lg' | undefined;


export function mixinSize<T extends Constructor<HasElementRef>>(base: T, defaultSize?: ThemeSizes): Constructor<HasElementRef> {
  return class extends base {
    // tslint:disable-next-line:variable-name
    private _size: ThemeSizes;
    defaultSize = defaultSize;

    get size(): ThemeSizes {
      return this._size;
    }

    set size(value: ThemeSizes) {
      const size = value || this.defaultSize;

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
