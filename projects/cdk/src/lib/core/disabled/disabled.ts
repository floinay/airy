import {Constructor} from '../../types';
import {HasElementRef} from '../../types';

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
        if (!value) {
          this._elementRef.nativeElement.removeAttribute('disabled');
        } else {
          this._elementRef.nativeElement.setAttribute('disabled', 'true');
        }


        this._disabled = value;
      }
    }
  };
}
