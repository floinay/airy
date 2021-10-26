import { Constructor } from '../../types';
import { HasElementRef } from '../../types';
import { ElementRef } from '@angular/core';

export interface CanColor {
  color: ThemePalette;
  defaultColor: ThemePalette | undefined;
}

export interface SetColorOptions {
  value: ThemePalette;
  previousValue: ThemePalette;
  elementRef: ElementRef<HTMLElement>;
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
      setColor({
        value,
        previousValue: this._color,
        elementRef: this._elementRef
      });
      this._color = value;
    }

    constructor(...args: any[]) {
      super(...args);
      this.color = defaultColor;
    }
  };
}


export const setColor = ({value, previousValue, elementRef}: SetColorOptions): ThemePalette => {
  const color = value;
  if (color !== previousValue) {
    if (previousValue) {
      elementRef.nativeElement.classList.remove(`color-${previousValue}`);
    }
    if (color) {
      elementRef.nativeElement.classList.add(`color-${color}`);
    }

  }
  return color;
};
