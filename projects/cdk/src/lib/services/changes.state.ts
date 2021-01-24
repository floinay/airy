import {Injectable, SimpleChanges} from '@angular/core';
import {UnknownObject} from '../types';

@Injectable()
export class ChangesState {
  private props: UnknownObject = {};
  private lastProps: UnknownObject = {};
  private removedProps: string[] = [];

  patch(changes: SimpleChanges): void {
    this.lastProps = {};
    for (const [key, change] of Object.entries(changes)) {
      if (!change.currentValue && change.previousValue) {
        this.removedProps.push(key);
        delete this.props[key];
      } else {
        this.props[key] = change.currentValue;
        this.lastProps[key] = change.currentValue;
      }
    }
  }

  all(): UnknownObject {
    return this.props;
  }

  last(): UnknownObject {
    return {};
  }

  removed(): string[] {
    return this.removedProps;
  }
}
