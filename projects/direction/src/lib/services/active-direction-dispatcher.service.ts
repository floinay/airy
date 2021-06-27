import {Injectable} from '@angular/core';
import {DirectionDispatcher} from './direction-dispatcher';

@Injectable({
  providedIn: 'root'
})
export class ActiveDirectionDispatcherService implements DirectionDispatcher {

  run(callback: () => void): void {
    callback();
  }

  throw(callback: () => void): void {
    callback();
  }

}
