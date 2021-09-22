import {Constructor} from '../../types';
import {HasElementRef} from '../../types';

export interface CanColor {
  color: ThemePalette;

  defaultColor: ThemePalette | undefined;
}


export type CanColorCtor = Constructor<CanColor>;

export type ThemePalette =
  'default'
  | 'primary'
  | 'accent'
  | 'warn'
  | 'danger'
  | 'disabled'
  | 'success'
  | undefined
  | 'text-primary'
  | 'text-secondary'
  | 'border';


export function mixinColor<T extends Constructor<HasElementRef>>(
  base: T, defaultColor?: ThemePalette): CanColorCtor & T {
  return class extends base {
    // tslint:disable-next-line:variable-name
    private _color: ThemePalette;
    defaultColor = defaultColor;

    get color(): ThemePalette {
      return this._color;
    }

    set color(value: ThemePalette) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`color-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`color-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);
      this.color = defaultColor;
    }
  };
}


export function mixinSetColor<T extends Constructor<HasElementRef>>(
  base: T, defaultColor?: ThemePalette): CanColorCtor & T {
  return class extends base {
    // tslint:disable-next-line:variable-name
    private _color: ThemePalette;
    defaultColor = defaultColor;

    get color(): ThemePalette {
      return this._color;
    }

    setColor(value: ThemePalette) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`color-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`color-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);
      this.setColor(defaultColor);
    }
  };
}
