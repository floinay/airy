import {Injectable} from '@angular/core';
import {DirectionDispatcher} from './direction-dispatcher';

@Injectable({
  providedIn: 'root'
})
export class FakeDirectionDispatcherService implements DirectionDispatcher {
  run(callback: () => void): void {
  }

  throw(callback: () => void): void {
  }
}
