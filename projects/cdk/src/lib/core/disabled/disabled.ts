import { Constructor } from '../../types/constructor';
import { HasElementRef } from '../../types/has-element-ref';

interface Disabled {
  disabled: boolean;
}

export type CanDisabledCtor = Constructor<Disabled>;

export function mixinDisabled<T extends Constructor<HasElementRef>>(base: T): CanDisabledCtor & T {
  return class extends base {
    // tslint:disable-next-line:variable-name
    private _disabled = false;

    get disabled(): boolean {
      return this._disabled;
    }

    set disabled(value: boolean) {
      if (this.disabled !== value) {
        // @ts-ignore
        this._elementRef.nativeElement.setAttribute('disabled', value);

        this._disabled = value;
      }
    }
  };
}
