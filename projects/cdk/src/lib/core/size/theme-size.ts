export enum ThemeSizes {
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
  none = 'none'
}


export type ThemeSize =
  undefined
  | ThemeSizes
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | ''
  | string
  | 'none'
  | 'auto';
export type ThemeSizeNegative = '-xxs' | '-xs' | '-s' | '-m' | '-l' | '-xl' | '-xxl';
export type ThemeSizeWithNegative = ThemeSize | ThemeSizeNegative;
