import {BreakpointsHelper} from '../../../../core/breakpoints';
import {camelToKebab} from '../../../../helpers/string/camel-to-kebab';
import {firstLetterToLower} from '../../../../helpers/string/first-letter-to-lower';
import {StringObject} from '../../../../types/string-object';

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
    return Boolean(BreakpointsHelper.keys().find(key => this.name.startsWith(key)));
  }

  propName(): string {
    const withoutBreakpoint = this.withoutBreakpoint();

    return this.propertiesMap[withoutBreakpoint] || camelToKebab(firstLetterToLower(withoutBreakpoint));
  }

  propValue(): string | number {
    return this.defaultValue() || this.valuesMap[this.value] || this.value;
  }

  private defaultValue(): string | number | null {
    return this.isDefaultValue() ? this.valuesMap.default : null;
  }

  private isDefaultValue(): boolean {
    return !this.value || this.value === '' && 'default' in this.valuesMap;
  }


  private withoutBreakpoint(): string {
    return this.name.split(this.isBreakpointProp() ? 'Air' : 'air')[1] || this.name;
  }

  breakpoint(): string | null {
    if (this.isBreakpointProp()) {
      const bp = this.name.split('Air')[0] as keyof BreakpointsHelper;
      return BreakpointsHelper[bp];
    }

    return null;
  }
}
