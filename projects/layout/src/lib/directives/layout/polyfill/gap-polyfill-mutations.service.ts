import {Inject, Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WINDOW} from '@ng-web-apis/common';
import {filter, take} from 'rxjs/operators';
import {GapPolyfillIdService} from './gap-polyfill-id.service';

/**
 * @dynamic
 */
@Injectable({providedIn: 'root'})
export class GapPolyfillMutationsService implements OnDestroy {
  private readonly onColGapRemoved = new Subject<string>();
  private readonly onRowGapRemoved = new Subject<string>();
  // @ts-ignore
  private observer = new MutationObserver(this.observerCallback);
  private observerCallback: MutationCallback = (list: MutationRecord[]) => {
    list.forEach(record => {
      record.removedNodes.forEach((node) => this.unsubscribe(node));
    });
  }

  constructor(private gapIdService: GapPolyfillIdService, @Inject(WINDOW) readonly window: Window) {
    this.observer.observe(this.window.document, {childList: true, subtree: true});
  }

  onRowGapRemoved$(id: string): Observable<string> {
    return this.onRowGapRemoved.pipe(filter(v => v === id), take(1));
  }

  onColGapRemoved$(id: string): Observable<string> {
    return this.onColGapRemoved.pipe(filter(v => v === id));
  }

  private unsubscribe(node: Node): void {
    if (node instanceof HTMLElement) {
      if (this.gapIdService.hasRowGap(node)) {
        this.onRowGapRemoved.next(this.gapIdService.rowGap(node));
      }

      if (this.gapIdService.hasColGap(node)) {
        this.onColGapRemoved.next(this.gapIdService.colGap(node));
      }
    }
    if (node.childNodes) {
      // tslint:disable-next-line:no-shadowed-variable
      node.childNodes.forEach(node => this.unsubscribe(node));
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
