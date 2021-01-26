export enum ThemeSizes {
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl'
}


export type ThemeSize = undefined | keyof ThemeSizes | '' | string;
