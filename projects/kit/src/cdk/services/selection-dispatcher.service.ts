import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

type Id = string;
type Name = string;

interface NotifyOptions {
  id: string;
  name: string;
}

@Injectable({providedIn: 'root'})
export class SelectionDispatcherService {
  private dispatchers = new Map<Name, Subject<Id>>();

  notify({id, name}: NotifyOptions): void {
    if (!this.dispatchers.has(name)) {
      throw new Error(`Please subscribe to listener before notify selection dispatcher. The listener name: ${name}`);
    }
    this.dispatchers.get(name)?.next(id);
  }

  listen(name: Name): Observable<Id> {
    this.appendDispatcher(name);
    return this.dispatchers.get(name)?.asObservable() as Observable<Id>;
  }

  private appendDispatcher(name: Name): void {
    if (!this.dispatchers.has(name)) {
      this.dispatchers.set(name, new Subject<Id>());
    }
  }
}
