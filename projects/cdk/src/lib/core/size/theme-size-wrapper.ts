import {ThemeSize, ThemeSizes} from './theme-size';

interface WidthAndHeight {
  width: string;
  height: string;
}

const POSSIBLE_WIDTH_VALUES = ['auto', 'initial', 'inherit', '0', 0];
const POSSIBLE_WIDTH_UNITS = ['px', '%', 'rem', 'em', 'vw', 'vh'];

export class ThemeSizeWrapper {
  constructor(public size: ThemeSize) {
  }

  isThemeSize(): boolean {
    return Boolean(this.size && this.size in ThemeSizes);
  }

  isWidthAndHeight(): boolean {
    const size = this.size as string;

    return Boolean(size && size.split(' ').length === 2);
  }

  isWidth(): boolean {
    const size = this.size as string;
    return Boolean(
      size &&
      !this.isWidthAndHeight() &&
      POSSIBLE_WIDTH_VALUES.find(width => width === this.size) &&
      POSSIBLE_WIDTH_UNITS.find(unit => size.endsWith(unit))
    );
  }

  widthAndHeight(): WidthAndHeight {
    const size = this.size as string;
    const widthAndHeight = size.split(' ') as string[];

    if (widthAndHeight.length !== 2) {
      throw new Error(`Size ${size} is not width and height string`);
    }

    return {width: widthAndHeight[0], height: widthAndHeight[1]};
  }
}
