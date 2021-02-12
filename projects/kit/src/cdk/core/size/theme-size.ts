export enum ThemeSizes {
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl'
}


export type ThemeSize = undefined | ThemeSizes | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '' | string | 'none';
