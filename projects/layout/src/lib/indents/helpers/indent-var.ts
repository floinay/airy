export const DEFAULT_VALUES_MAP = {
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '20px',
  l: '28px',
  xl: '40px',
  xxl: '60px',
  none: '0',
  default: '20px',
  auto: 'auto'
};
export const isNegative = (size: string) => size.includes('-');
export const isMultiple = (size: string) => size.includes(' ');
export const multipleSize = (size: string) => size.split(' ').reduce((previous, current) => `${previous} ${singleSize(current)}`)
export const pureSizeName = (size: string): keyof typeof DEFAULT_VALUES_MAP => size.replace('-', '')
  .replace('default', 'm') as keyof typeof DEFAULT_VALUES_MAP;
export const singleSize = (size: string) => {
  if (isStatic(size)) {
    return getStatic(size);
  }
  const pureName = pureSizeName(size);
  const defaultValue = DEFAULT_VALUES_MAP[pureName];
  const positiveVar = `var(--indent-${pureName}, ${defaultValue})`;
  return isNegative(size) ? `calc(-1 * ${positiveVar})` : positiveVar;
};
export const isStatic = (size: string): boolean => size.includes('none') || size.includes('0') || size.includes('auto');
export const getStatic = (size: string) => size === 'none' ? '0' : size;
export const indentVar = (size: string): string => {
  return isMultiple(size) ? multipleSize(size) : singleSize(size);
}
