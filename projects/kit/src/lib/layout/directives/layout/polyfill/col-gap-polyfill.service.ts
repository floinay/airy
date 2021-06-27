import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {UntilDestroy} from '@ngneat/until-destroy';
import {GapPolyfillResizeListenerService} from './gap-polyfill-resize-listener.service';
import {GapPolyfillMutationsService} from './gap-polyfill-mutations.service';
import {GapPolyfillIdService} from './gap-polyfill-id.service';
import {Layout} from '../types';

/**
 * @dynamic
 */
@Injectable({providedIn: 'root'})
@UntilDestroy()
export class ColGapPolyfillService {
  private childNodes(el: HTMLElement): HTMLElement[] {
    return Array.from(el.childNodes) as HTMLElement[];
  }


  constructor(@Inject(WINDOW) readonly window: Window,
              private resizeListener: GapPolyfillResizeListenerService,
              private mutationsService: GapPolyfillMutationsService,
              private idService: GapPolyfillIdService) {
  }

  enable(el: HTMLElement): void {
    setTimeout(() => {
      const id = this.idService.addColGap(el);
      this.resizeListener.listen(id, el).subscribe(() => this.setIndents(el));
      this.setIndents(el);
      this.mutationsService.onColGapRemoved$(id).subscribe(() => this.disable(el));
    });
  }

  disable(el: HTMLElement): void {
    try {
      this.resizeListener.unsubscribe(this.idService.colGap(el));
    } catch (e) {
    }
  }


  private setIndents(el: HTMLElement): void {
    const styles = this.window.getComputedStyle(el);
    const layout = styles.getPropertyValue('flex-flow') as Layout;
    const value = styles.getPropertyValue('--col-gap');
    this.clearIndents(el);
    if (layout === 'row' || layout === 'row-reverse') {
      this.rowLayoutIndents(value, el);
    } else if (layout !== 'column' && layout !== 'column-reverse') {
      this.wrapLayoutIndents(value, el);
    }
  }

  private clearIndents(el: HTMLElement): void {
    for (let i = 0; i < el.childNodes.length; i++) {
      const e = this.childNodes(el)[i];
      if (e.style) {
        e.style.marginInlineEnd = '';
      }

    }
  }

  private wrapLayoutIndents(value: string, el: HTMLElement): void {
    const containerWidth = el.getBoundingClientRect().width;
    let elementsWidth = 0;
    const indent = parseFloat(value);
    for (let i = 0; i < this.childNodes(el).length - 1; i++) {
      const currentNode = this.childNodes(el)[i];
      if (currentNode.style) {
        elementsWidth = currentNode.getBoundingClientRect().width + elementsWidth + indent;
        if ((elementsWidth < containerWidth)) {
          currentNode.style.marginInlineEnd = value;
        } else {
          elementsWidth = 0;
        }
      }
    }
  }

  private rowLayoutIndents(value: string, el: HTMLElement): void {
    for (let i = 0; i < el.childNodes.length - 1; i++) {
      const e = el.childNodes[i] as HTMLElement;
      if (e.style) {
        e.style.marginInlineEnd = value;
      }
    }
  }
}
