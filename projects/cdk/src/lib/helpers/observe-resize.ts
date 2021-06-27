import {Observable} from 'rxjs';

export const observeResize = (el: HTMLElement): Observable<void> => {
  return new Observable(subscriber => {
    // @ts-ignore
    const ro = new ResizeObserver(() => {
      subscriber.next();
    });

    ro.observe(el);
    return function unsubscribe() {
      ro.disconnect();
    }
  });
};
