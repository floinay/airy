import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {UntilDestroy} from '@ngneat/until-destroy';
import {parseInt} from 'lodash-es';
import {GapPolyfillResizeListenerService} from './gap-polyfill-resize-listener.service';
import {GapPolyfillMutationsService} from './gap-polyfill-mutations.service';
import {GapPolyfillIdService} from './gap-polyfill-id.service';
import {Layout} from '../types';

/**
 * @dynamic
 */
@Injectable({providedIn: 'root'})
@UntilDestroy()
export class RowGapPolyfillService {
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
      const id = this.idService.addRowGap(el);
      this.resizeListener.listen(id, el).subscribe(() => this.setIndents(el));
      this.setIndents(el);
      this.mutationsService.onRowGapRemoved$(id).subscribe(() => this.disable(el));
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
    const value = styles.getPropertyValue('--row-gap');
    this.clearIndents(el);
    if (layout === 'row wrap' || layout === 'column' || layout === 'column-reverse') {
      const maxIndex = this.calculateMaxIndex(el);
      for (let i = 0; i < maxIndex; i++) {
        const node = this.childNodes(el)[i];
        if (node.style) {
          node.style.marginBottom = value;
        }
      }
    }
  }

  private calculateMaxIndex(el: HTMLElement): number {
    const containerWidth = el.getBoundingClientRect().width;
    const nodes = this.childNodes(el);
    const contentWidth = nodes.filter(node => node.style).reduce(
      (width, node) => node.getBoundingClientRect().width + this.colGap(node) + width,
      0);
    if (contentWidth <= containerWidth) {
      return 0;
    }

    const rowsCount = Math.ceil(contentWidth / containerWidth);

    return Math.floor((nodes.length / rowsCount) * (rowsCount - 1));
  }

  private colGap(node: HTMLElement): number {
    const style = this.window.getComputedStyle(node);
    // tslint:disable-next-line:radix
    return parseInt(style.getPropertyValue('margin-inline-end'));
  }

  private clearIndents(el: HTMLElement): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < el.childNodes.length; i++) {
      const e = el.childNodes[i] as HTMLElement;
      if (e.style) {
        e.style.marginBottom = '';
      }
    }
  }
}
