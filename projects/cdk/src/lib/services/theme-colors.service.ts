import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {colord} from 'colord';
import {ThemePalette} from '../core';

interface PropName {
  name: ThemePalette;
  shade?: string;
  contrast?: boolean;
}

const propName = ({name, shade, contrast}: PropName): string => {
  if (shade) {
    return contrast ? `--color-${name}-${shade}-contrast` : `--color-${name}-${shade}`;
  }
  return contrast ? `--color-${name}-contrast` : `--color-${name}`;
}

const dark = (color: string): string => colord(color).darken(0.1).toHex()

const changeColorL = (color: string, l: number): string => {
  const {h, s, a} = colord(color).toHsl();
  return colord({h, s, l: l, a}).toHex();
}

const light = (color: string): string => changeColorL(color, 88);
const shade50 = (color: string): string => changeColorL(color, 96);
const shade30 = (color: string): string => changeColorL(color, 99);

const contrast = (color: string): string => {
  return colord(color).isLight() ? 'var(--contrast-dark)' : 'var(--contrast-light)';
};

interface SetPropertyOptions {
  name: ThemePalette;
  value: string;
  shade?: string;
  contrast?: boolean;
}

@Injectable({providedIn: 'root'})
export class ThemeColorsService {
  constructor(@Inject(DOCUMENT) readonly document: Document) {
  }

  set(name: ThemePalette, color: string) {
    this.setProperty({name, value: color});
    this.setProperty({name, value: contrast(color), contrast: true});

    this.setProperty({name, value: dark(color), shade: 'dark'});
    this.setProperty({name, value: contrast(dark(color)), shade: 'dark', contrast: true});

    this.setProperty({name, value: light(color), shade: 'light'});
    this.setProperty({name, value: contrast(light(color)), shade: 'light', contrast: true});

    this.setProperty({name, value: shade50(color), shade: '50'});
    this.setProperty({name, value: contrast(shade50(color)), shade: '50', contrast: true});

    this.setProperty({name, value: shade30(color), shade: '30'});
    this.setProperty({name, value: contrast(shade30(color)), shade: '30', contrast: true});
  }

  private setProperty({name, value, shade, contrast}: SetPropertyOptions) {
    this.document.body.style.setProperty(propName({name, shade, contrast}), value);
  }
}
