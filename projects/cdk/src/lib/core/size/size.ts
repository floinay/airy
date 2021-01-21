import {Constructor} from '../../types';
import {HasElementRef} from '../../types';

export interface CanSize {
  size: ThemeSize;
}

export type CanSizeCtor = Constructor<CanSize>;

export interface ThemeSizes {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}


export type ThemeSize = undefined | keyof ThemeSizes | '' | string;


export function mixinSize<T extends Constructor<HasElementRef>>(base: T): CanSizeCtor & T {
  return class extends base {
    // tslint:disable-next-line:variable-name
    private _size: ThemeSize;

    get size(): ThemeSize {
      return this._size;
    }

    set size(size: ThemeSize) {
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
