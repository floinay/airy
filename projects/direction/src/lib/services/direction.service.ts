import { Inject, Injectable, Optional } from '@angular/core';
import { DEFAULT_DIRECTION } from '../direction.providers';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';
import { DirectionDispatcher } from './direction-dispatcher';
import { ActiveDirectionDispatcherService } from './active-direction-dispatcher.service';
import { FakeDirectionDispatcherService } from './fake-direction-dispatcher.service';

const LAST_DIRECTION_KEY = 'air_direction';

// @dynamic
@Injectable()
export class DirectionService {
  private readonly state$ = new BehaviorSubject<Direction | undefined>(undefined);

  constructor(@Inject(LOCAL_STORAGE) readonly localStorage: Storage,
              private directionality: Directionality,
              @Inject(DOCUMENT) readonly document: Document,
              private activeDirectionDispatcher: ActiveDirectionDispatcherService,
              private fakeDirectionDispatcher: FakeDirectionDispatcherService,
              @Inject(DEFAULT_DIRECTION) @Optional() readonly defaultDirection?: Direction) {
    this.set(this.lastOrDefault());
  }

  watch(): Observable<Direction> {
    return this.state$.pipe(filter(dir => Boolean(dir))) as Observable<Direction>;
  }

  switch(): void {
    this.set(this.isRtl() ? 'ltr' : 'rtl');
  }

  isLtr(): boolean {
    return this.direction === 'ltr';
  }

  isRtl(): boolean {
    return this.direction === 'rtl';
  }

  whenRtl(): DirectionDispatcher {
    if (this.isRtl()) {
      return this.activeDirectionDispatcher;
    }

    return this.fakeDirectionDispatcher;
  }

  whenLtr(): DirectionDispatcher {
    if (this.isLtr()) {
      return this.activeDirectionDispatcher;
    }

    return this.fakeDirectionDispatcher;
  }

  set(direction: Direction): void {
    this.localStorage.setItem(LAST_DIRECTION_KEY, direction);
    this.directionality.change.emit(direction);
    this.state$.next(direction);
    this.document.body.classList.remove('rtl', 'ltr');
    this.document.body.classList.add(direction);
    this.document.body.style.setProperty('direction', direction);
    this.document.body.style.setProperty('--direction', direction);
    this.document.body.dir = direction;
  }

  get direction(): Direction {
    return this.state$.getValue() as Direction;
  }

  private lastOrDefault(): Direction {
    const lastDirection = this.lastDirection();
    if (this.isDirection(lastDirection)) {
      return lastDirection as Direction;
    } else if (this.defaultDirection) {
      return this.defaultDirection;
    } else {
      return this.directionality.value;
    }
  }

  private isDirection(direction: Direction | null): boolean {
    return Boolean(direction && (direction === 'ltr' || direction === 'rtl'));
  }

  private lastDirection(): Direction | null {
    return this.localStorage.getItem(LAST_DIRECTION_KEY) as Direction;
  }
}
