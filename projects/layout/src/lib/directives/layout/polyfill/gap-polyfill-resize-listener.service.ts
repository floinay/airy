import {Injectable} from '@angular/core';
import {GenericObject, observeResize} from '@airy-ui/cdk';
import {debounceTime} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Observable, Subject, Subscription} from 'rxjs';

@Injectable({providedIn: 'root'})
@UntilDestroy()
export class GapPolyfillResizeListenerService {
  private readonly resizeSubs: GenericObject<Subscription> = {};
  private readonly subs: GenericObject<Subject<void>> = {};


  listen(id: string, el: HTMLElement): Observable<void> {
    this.unsubscribe(id);
    this.subs[id] = new Subject();
    this.resizeSubs[id] = observeResize(el).pipe(debounceTime(200), untilDestroyed(this)).subscribe(() => {
      this.subs[id].next();
    });
    return this.subs[id].asObservable();
  }

  unsubscribe(id: string): void {
    this.resizeSubs[id]?.unsubscribe();
    this.subs[id]?.complete();
  }
}
