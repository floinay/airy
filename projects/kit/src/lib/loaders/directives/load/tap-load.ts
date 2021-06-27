import {Observable} from 'rxjs';
import {LoadersStaticInjector} from '../../loaders-static-injector';
import {LoadWhenService} from './load-when.service';

export function tapLoad(key: string): <T>(source: Observable<T>) => Observable<T> {
  const StaticLoadWhenService = LoadersStaticInjector.get(LoadWhenService);
  return <T>(source: Observable<T>): Observable<T> => {
    StaticLoadWhenService.load(key);
    return new Observable(subscriber => {
      source.subscribe({
        next(value): void {
          StaticLoadWhenService.finish(key);
          subscriber.next(value);
        },
        error(error): void {
          StaticLoadWhenService.finish(key);
          subscriber.error(error);
        },
        complete(): void {
          StaticLoadWhenService.finish(key);
          subscriber.complete();
        }
      });
    });
  };
}
