import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {interval, Observable} from 'rxjs';
import {filter, mapTo, takeWhile, tap} from 'rxjs/operators';

interface OpenWindowOptions {
  url: string;
  width?: number;
  height?: number;
  target?: string;
}

@Injectable({providedIn: 'root'})
export class WindowService {
  constructor(@Inject(WINDOW) readonly window: Window) {
  }

  open({url, width, height, target}: OpenWindowOptions): Observable<void> {
    const w = window.open(url, target || '', `width=${width},height=${height}`) as Window;
    let closed = false;
    return interval(1000).pipe(
      takeWhile(() => !closed),
      tap(() => closed = w.closed),
      filter(() => closed), mapTo(undefined));
  }
}
