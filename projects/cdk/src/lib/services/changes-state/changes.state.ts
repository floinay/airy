import {Inject, Injectable, Optional, SimpleChange, SimpleChanges} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CHANGES_STATE_IGNORED_KEYS, ChangesStateIgnoredKeys} from './changes-tokens';

export interface ChangesStateSnapshot<K, V> {
  changes: Map<K, V>;
  recent: Map<K, V>;
  deleted: K[];
}

@Injectable()
export class ChangesState<K extends unknown, V extends unknown> {
  state: ChangesStateSnapshot<K, V> = {
    changes: new Map<K, V>(),
    recent: new Map<K, V>(),
    deleted: []
  };
  private subject$ = new Subject<ChangesStateSnapshot<K, V>>();

  private ignoredKeys = this.mergeIgnoredKeys();

  constructor(@Inject(CHANGES_STATE_IGNORED_KEYS) @Optional() readonly injectedIgnoredKeys?: ChangesStateIgnoredKeys) {
  }

  watch(): Observable<ChangesStateSnapshot<K, V>> {
    return this.subject$.asObservable();
  }

  patch(changes: SimpleChanges): void {
    this.recent.clear();
    this.state.deleted = [];

    for (const [key, value] of Object.entries(changes)) {
      if (this.isIgnoredKey(key)) {
        continue;
      }

      if (this.isDeletedChange(value)) {
        this.delete(key as K);
        continue;
      }

      this.append(key as K, value.currentValue as V);
    }

    this.subject$.next(this.state);
  }

  get changes(): Map<K, V> {
    return this.state.changes;
  }

  get recent(): Map<K, V> {
    return this.state.recent;
  }

  get deleted(): K[] {
    return this.state.deleted;
  }

  private isIgnoredKey(key: string): boolean {
    return Boolean(key in this.ignoredKeys);
  }

  private delete(key: K): void {
    this.changes.delete(key as K);
    this.deleted.push(key as K);
  }

  private append(key: K, value: V): void {
    this.changes.set(key as K, value);
    this.recent.set(key as K, value);
  }

  private isDeletedChange(value: SimpleChange): boolean {
    return value.previousValue && value.currentValue === undefined;
  }

  private mergeIgnoredKeys(): { [key: string]: null } {
    const keys: { [key: string]: null } = {};

    if (this.injectedIgnoredKeys?.length) {
      for (const keyOrKeys of this.injectedIgnoredKeys) {
        if (typeof keyOrKeys === 'string') {
          keys[keyOrKeys] = null;
        } else {
          for (const key of keyOrKeys) {
            keys[key] = null;
          }
        }
      }
    }

    return keys;
  }

}
