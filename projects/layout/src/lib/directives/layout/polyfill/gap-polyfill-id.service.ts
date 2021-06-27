import {Injectable} from '@angular/core';
import {randomId} from '@airy-ui/cdk';

export const COL_GAP_ATTRIBUTE_ID = 'cg-pf';
export const ROW_GAP_ATTRIBUTE_ID = 'rg-pf';

@Injectable({providedIn: 'root'})
export class GapPolyfillIdService {
  hasColGap(el: HTMLElement): boolean {
    return el.hasAttribute(COL_GAP_ATTRIBUTE_ID);
  }

  hasRowGap(el: HTMLElement): boolean {
    return el.hasAttribute(ROW_GAP_ATTRIBUTE_ID);
  }

  colGap(el: HTMLElement): string {
    if (this.hasColGap(el)) {
      return el.getAttribute(COL_GAP_ATTRIBUTE_ID) as string;
    }

    throw new Error('Undefined col gap');
  }

  rowGap(el: HTMLElement): string {
    if (this.hasRowGap(el)) {
      return el.getAttribute(ROW_GAP_ATTRIBUTE_ID) as string;
    }

    throw new Error('Undefined row gap');
  }

  addColGap(el: HTMLElement): string {
    if (!this.hasColGap(el)) {
      const id = randomId();
      el.setAttribute(COL_GAP_ATTRIBUTE_ID, id);
      return id;
    }
    return this.colGap(el);
  }

  addRowGap(el: HTMLElement): string {
    if (!this.hasRowGap(el)) {
      el.setAttribute(ROW_GAP_ATTRIBUTE_ID, randomId());
    }

    return this.rowGap(el);
  }
}
