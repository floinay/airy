export class Breakpoints {
  static xs = 'screen and (max-width: 599px)';
  static sm = 'screen and (min-width: 600px) and (max-width: 959px)';
  static md = 'screen and (min-width: 960px) and (max-width: 1279px)';
  static lg = 'screen and (min-width: 1280px) and (max-width: 1919px)';
  static xl = 'screen and (min-width: 1920px) and (max-width: 5000px)';
  static ltSm = 'screen and (max-width: 599px)';
  static ltMd = 'screen and (max-width: 959px)';
  static ltLg = 'screen and (max-width: 1279px)';
  static ltXl = 'screen and (max-width: 1919px)';
  static gtXs = 'screen and (min-width: 600px)';
  static gtSm = 'screen and (min-width: 960px)';
  static gtMd = 'screen and (min-width: 1280px)';
  static gtLg = 'screen and (min-width: 1920px)';


  static revertKeyValue(): { [key: string]: Breakpoint } {
    const reverted = {};
    this.keys().forEach(key => reverted[this[key]] = key);

    return reverted;
  }

  static breakpointByMedia(media: string): Breakpoint {
    return this.revertKeyValue()[media];
  }

  static keys(): Breakpoint[] {
    return Object.keys(this) as Breakpoint[];
  }

  static values(keys?: Breakpoint[]): BreakpointValue[] {
    if (keys) {
      return keys.map(key => this[key]);
    }
    return Object.values(this) as BreakpointValue[];
  }

}


export type Breakpoint = string & keyof Breakpoints;

export type BreakpointValue = string & Breakpoints[Breakpoint];

