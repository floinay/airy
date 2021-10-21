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
    const {parent, children} = this.parentAndChildren(el);
    if (this.parentOrElementInvalid(parent, el)) {
      return false;
    }
    const parentWidth = this.getWidthWithoutPaddings(parent);
    const parentGap = this.getGap(parent);
    let lineWidth = 0;
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      const nodeWidth = this.childNodeWidth(node);
      lineWidth += nodeWidth;
      if (el === node) {
        if (this.isLastElement(i, children) || lineWidth === parentWidth || nodeWidth >= parentWidth) {
          return true;
        }

        if (lineWidth < parentWidth) {
          const nextNodeWidth = this.getNextNodeWidth(i, children);
          if (nextNodeWidth + lineWidth > parentWidth) {
          }
          return nextNodeWidth + lineWidth > parentWidth;
        }

        return false;

      }
      if (lineWidth === parentWidth) {
        lineWidth = 0;
      }
      if (lineWidth > parentWidth) {
        lineWidth = nodeWidth + parentGap;
      } else {
        lineWidth += parentGap;
      }
    }
    return false;
  }


  private isLastElement(i: number, children: Array<any>): boolean {
    return i + 1 === children.length;
  }

  private childNodeWidth(node: HTMLElement): number {
    return node.clientWidth + this.getMargin(node);
  }

  private needSkipNode(el: HTMLElement): boolean {
    return el.nodeName === '#comment';
  }

  private parentAndChildren(el: HTMLElement): { parent: HTMLElement, children: HTMLElement[] } {
    const parent = el.parentElement as HTMLElement;
    return {
      parent,
      children: Array.from(parent.childNodes).filter(el => !this.needSkipNode(el as HTMLElement)) as HTMLElement[]
    };
  }

  private parentOrElementInvalid(parent: HTMLElement, el: HTMLElement): boolean {
    return !parent || parent.childNodes.length === 1 || el.nodeName === '#comment' || parent.nodeName === '#comment' || this.hasHorizontalScrollbar(parent);
  }

  firstOnLine(el: HTMLElement): boolean {
    const parent = el.parentElement;
    if (!parent || parent.childNodes.length === 1 || el.nodeName === '#comment' || parent.nodeName === '#comment') {
      return false;
    }

    if (this.hasHorizontalScrollbar(parent)) {
      throw new Error('FirstOnLine not working on parent with horizontal scroll');
    }

    const parentWidth = this.getWidthWithoutPaddings(parent);
    const parentGap = this.getGap(parent);

    let lineWidth = 0;
    for (let i = 0; i < parent.childNodes.length; i++) {
      const node = parent.childNodes[i] as HTMLElement;
      if (node.nodeName === '#comment') {
        continue;
      }
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

  private getNextNodeWidth(index = 0, nodes: HTMLElement[]): number {
    index++;
    const node = nodes[index];
    const nextNodeWidth = node.nodeName === '#comment' ? 0 : node.clientWidth + this.getMargin(node);
    if (nextNodeWidth === 0 && nodes.length - 1 > index) {
      return this.getNextNodeWidth(index, nodes);
    }
    return nextNodeWidth;
  }

  private getWidthWithoutPaddings(el: HTMLElement): number {
    const computedStyle = this.window.getComputedStyle(el);
    return el.clientWidth - (parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight));
  }

  private getGap(el: HTMLElement): number {
    const gap = this.window.getComputedStyle(el).columnGap || '0px';
    if (!gap.endsWith('px') && gap !== 'normal') {
      throw new Error('[startWidth, endWidth] support gap only in px');
    }

    return gap === 'normal' ? 0 : parseFloat(gap);
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
