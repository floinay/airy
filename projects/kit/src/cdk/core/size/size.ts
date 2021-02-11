import {Constructor} from '../../types';
import {HasElementRef} from '../../types';
import {ThemeSizeWrapper} from './theme-size-wrapper';
import {ThemeSize} from './theme-size';

export interface CanSize {
  size: ThemeSize;
}

export type CanSizeCtor = Constructor<CanSize>;

export function mixinSize<T extends Constructor<HasElementRef>>(base: T): CanSizeCtor & T {
  return class extends base {
    // tslint:disable-next-line:variable-name
    private _size: ThemeSize;

    get size(): ThemeSize {
      return this._size;
    }

    set size(size: ThemeSize) {
      if (size !== this._size) {
        this.clearPreviousSize();
        this.setSize(size);
      }
    }

    private setSize(size: ThemeSize): void {
      if (size) {
        const sizeWrapper = new ThemeSizeWrapper(size);
        if (sizeWrapper.isThemeSize()) {
          this._elementRef.nativeElement.classList.add(`size-${size}`);
        } else if (sizeWrapper.isWidthAndHeight()) {
          const {width, height} = sizeWrapper.widthAndHeight();
          this._elementRef.nativeElement.style.setProperty('width', width);
          this._elementRef.nativeElement.style.setProperty('height', height);
        } else if (sizeWrapper.isWidth()) {
          this._elementRef.nativeElement.style.setProperty('width', size as string);
        }
      }
      this._size = size;
    }

    private clearPreviousSize(): void {
      if (this._size) {
        const sizeWrapper = new ThemeSizeWrapper(this._size);
        if (sizeWrapper.isThemeSize()) {
          this._elementRef.nativeElement.classList.remove(`size-${this._size}`);
        } else if (sizeWrapper.isWidthAndHeight()) {
          this._elementRef.nativeElement.style.removeProperty('width');
          this._elementRef.nativeElement.style.removeProperty('height');
        } else if (sizeWrapper.isWidth()) {
          this._elementRef.nativeElement.style.removeProperty('width');
        }
      }
    }
  };
}
