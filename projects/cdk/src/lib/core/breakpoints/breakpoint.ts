export enum Breakpoint {
  xs = 'screen and (max-width: 599px)',
  sm = 'screen and (min-width: 600px) and (max-width: 959px)',
  md = 'screen and (min-width: 960px) and (max-width: 1279px)',
  lg = 'screen and (min-width: 1280px) and (max-width: 1919px)',
  xl = 'screen and (min-width: 1920px) and (max-width: 5000px)',
  ltSm = 'screen and (max-width: 599px)',
  ltMd = 'screen and (max-width: 959px)',
  ltLg = 'screen and (max-width: 1279px)',
  ltXl = 'screen and (max-width: 1919px)',
  gtXs = 'screen and (min-width: 600px)',
  gtSm = 'screen and (min-width: 960px)',
  gtMd = 'screen and (min-width: 1280px)',
  gtLg = 'screen and (min-width: 1920px)',
}

export enum BreakpointName {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  ltSm = 'ltSm',
  ltMd = 'ltMd',
  ltLg = 'ltLg',
  ltXl = 'ltXl',
  gtXs = 'gtXs',
  gtSm = 'gtSm',
  gtMd = 'gtMd',
  gtLg = 'gtLg',
}

export const BREAKPOINT_NAMES: BreakpointName[] = Object.keys(BreakpointName) as BreakpointName[];
export const BREAKPOINT_VALUES: Breakpoint[] = Object.values(Breakpoint);
export const breakpointValues = (keys: BreakpointName[]): Breakpoint[] => keys.map(key => Breakpoint[key]);
export const breakpointValue = (key: BreakpointName): Breakpoint => breakpointValues([key])[0];

