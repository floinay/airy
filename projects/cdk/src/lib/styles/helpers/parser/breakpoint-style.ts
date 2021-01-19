import {Breakpoints} from '../../../breakpoints';
import {camelToKebab} from '../../../helpers/sring/camel-to-kebab';
import {firstLetterToLower} from '../../../helpers/sring/first-letter-to-lower';
import {StringObject} from '../../../types/string-object';

interface BreakpointStyleOptionsInterface {
  propName: string;
  propValue: string | number;
  propsMap: StringObject;
  propValuesMap: StringObject;
}

export class BreakpointStyle {
  private get name(): string {
    return this.options.propName;
  }

  private get propertiesMap(): StringObject {
    return this.options.propsMap;
  }

  private get valuesMap(): StringObject {
    return this.options.propValuesMap;
  }

  private get value(): string | number {
    return this.options.propValue;
  }


  constructor(private options: BreakpointStyleOptionsInterface) {
  }

  isBreakpointProp(): boolean {
    return Boolean(Breakpoints.keys().find(key => this.name.startsWith(key)));
  }

  propName(): string {
    const withoutBreakpoint = this.withoutBreakpoint();

    return this.propertiesMap[withoutBreakpoint] || camelToKebab(firstLetterToLower(withoutBreakpoint));
  }

  propValue(): string | number {
    return this.valuesMap[this.name] || this.value;
  }


  private withoutBreakpoint(): string {
    return this.name.split('.')[1];
  }

  breakpoint(): keyof Breakpoints | null {
    if (this.isBreakpointProp()) {
      return this.name.split('.')[0] as keyof Breakpoints;
    }

    return null;
  }
}
