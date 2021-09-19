import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {fromEvent, Observable} from 'rxjs';
import {auditTime} from 'rxjs/operators';

/**
 * @dynamic
 */
@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(@Inject(WINDOW) readonly window: Window) {
  }

  watch(): Observable<Event> {
    return fromEvent(this.window, 'resize').pipe(auditTime(50));
  }

  lastOnLine(el: HTMLElement): boolean {
    const parent = el.parentElement;
    if (!parent || parent.childNodes.length === 1) {
      return true;
    }
    if (this.hasHorizontalScrollbar(parent)) {
      throw new Error('FirstOnLine not working on parent with horizontal scroll');
    }

    const parentWidth = this.getWidthWithoutPaddings(parent);
    const parentGap = this.getGap(parent);

    let lineWidth = 0;
    for (let i = 0; i < parent.childNodes.length; i++) {
      const node = parent.children[i] as HTMLElement;
      const nodeWidth = node.clientWidth + this.getMargin(node);

      lineWidth += nodeWidth;
      if (node === el) {
        if (i === parent.childNodes.length - 1 || lineWidth === parentWidth) {
          console.log(lineWidth === nodeWidth);
          return true;
        }
        if (lineWidth > parentWidth) {
          return false;
        }

        const nextNode = parent.childNodes[i + 1] as HTMLElement;
        const nextNodeWidth = nextNode.clientWidth + this.getMargin(nextNode);
        const nextLineWidth = lineWidth + nextNodeWidth;
        return nextLineWidth >= parentWidth;
      }
      lineWidth += parentGap;
    }

    return false;
  }

  firstOnLine(el: HTMLElement): boolean {
    const parent = el.parentElement;
    if (!parent || parent.childNodes.length === 1) {
      return true;
    }

    if (this.hasHorizontalScrollbar(parent)) {
      throw new Error('FirstOnLine not working on parent with horizontal scroll');
    }

    const parentWidth = this.getWidthWithoutPaddings(parent);
    const parentGap = this.getGap(parent);

    let lineWidth = 0;
    for (let i = 0; i < parent.childNodes.length; i++) {
      const node = parent.childNodes[i] as HTMLElement;
      const nodeWidth = node.clientWidth + this.getMargin(node);

      lineWidth += nodeWidth;
      if (lineWidth >= parentWidth) {
        if (lineWidth === parentWidth && nodeWidth != parentWidth) {
          lineWidth = 0;
        } else {
          lineWidth = nodeWidth;
        }
      }
      if (node === el) {
        if (lineWidth === nodeWidth) {
          return true;
        }
        break;
      }
      lineWidth += parentGap;
    }

    return false;
  }

  private hasHorizontalScrollbar(el: HTMLElement): boolean {
    return el.scrollWidth > el.clientWidth;
  }

  private getWidthWithoutPaddings(el: HTMLElement): number {
    const computedStyle = this.window.getComputedStyle(el);
    return el.clientWidth - parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
  }

  private getGap(el: HTMLElement): number {
    const gap = this.window.getComputedStyle(el).columnGap || '0px';
    if (!gap.endsWith('px')) {
      throw new Error('[startWidth, endWidth] support gap only in px');
    }

    return parseFloat(gap);
  }

  private getMargin(el: HTMLElement): number {
    const style = this.window.getComputedStyle(el);
    const end = el.style.marginInlineEnd === 'auto' || el.style.marginRight === 'auto' ? '0px' : style.marginRight || '0px';
    const start = el.style.marginInlineStart === 'auto' || el.style.marginLeft === 'auto' ? '0px' : style.marginLeft || '0px';

    if (start.endsWith('px') && end.endsWith('px')) {
      return parseFloat(start) + parseFloat(end);
    }

    throw new Error('Element support margin only in px');
  }
}
