import {InputsList} from './types/inputs-list';
import {Breakpoints} from '../breakpoints';
import {Breakpoint} from './breakpoint';
import {Breakpoint as BreakpointType} from '../breakpoints';

export class BreakpointsStyles {
  rootProperties: Breakpoint = new Breakpoint(null, {});
  responsiveProperties: { [key: string]: Breakpoint; } = {};

  constructor(private inputs: InputsList) {
    this.parse();
  }

  breakpoints(): BreakpointType[] {
    return Object.keys(this.responsiveProperties) as BreakpointType[];
  }

  currentProperties(breakpoints?: BreakpointType[]): InputsList {
    let properties = this.rootProperties.properties;
    if (breakpoints) {
      breakpoints.forEach(bp => properties = Object.assign(properties, this.responsiveProperties[bp]?.properties));
    }

    return properties;
  }

  private parse(): void {
    for (const propName of Object.keys(this.inputs)) {
      const propValue = this.inputs[propName];
      const bp = this.getBpFromPropName(propName);
      if (bp) {
        const cssPropName = propName.split(bp)[1];
        if (!(bp in this.responsiveProperties)) {
          this.responsiveProperties[bp] = new Breakpoint(bp as BreakpointType, {});
        }

        this.responsiveProperties[bp].properties[cssPropName] = propValue;
      } else {
        this.rootProperties.properties[propName] = propValue;
      }
    }
  }

  private getBpFromPropName(propName: string): string | undefined {
    return Breakpoints.keys().find(key => propName.startsWith(key));
  }
}
