import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {isArray} from 'lodash-es';

@Injectable({providedIn: 'root'})
export class LoadWhenService {
  private loads$ = new BehaviorSubject<{ [key: string]: boolean }>({});

  watchLoad$(keyOrKeys: string | string[]): Observable<boolean> {
    if (isArray(keyOrKeys)) {
      return this.loads$.pipe(map(loads => {
        const activeLoads = Object.keys(loads).filter((key) => loads[key]);
        return Boolean(activeLoads.find(activeLoadsKey => Boolean(keyOrKeys.find(key => activeLoadsKey === key))));
      }));
    } else {
      return this.loads$.pipe(map(loads => loads[keyOrKeys as string]));
    }

  }

  watchLoads$(): Observable<{ [key: string]: boolean }> {
    return this.loads$;
  }

  hasLoads$(): Observable<boolean> {
    return this.watchLoads$().pipe(map(loads => Boolean(Object.keys(loads).filter(key => loads[key]).length)));
  }

  load(key: string): void {
    const loads = this.loads$.getValue();
    loads[key] = true;
    this.loads$.next(loads);
  }

  finish(key: string): void {
    const loads = this.loads$.getValue();
    loads[key] = false;
    this.loads$.next(loads);
  }
}
