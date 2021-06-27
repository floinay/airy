import {Injectable} from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {clone} from '../helpers';

interface OptimalPositionsOptions {
  connectedElement: HTMLElement;
  connectedTo: HTMLElement;
  position: ConnectedPosition;
}

@Injectable({providedIn: 'root'})
export class OptimalPositionService {
  constructor() {
  }

  optimalPosition({connectedTo, position, connectedElement}: OptimalPositionsOptions): ConnectedPosition {
    const connectedToRef = connectedTo.getBoundingClientRect();
    const optimal = clone(position);
    if (this.isNeedChangeStart(connectedToRef.left, connectedElement.offsetWidth, position)) {
      optimal.originX = 'end';
      optimal.overlayX = 'end';
      optimal.offsetX = optimal.offsetX ? optimal.offsetX * -1 : 0;
    }

    if (this.isNeedChangeEnd(connectedToRef.right, connectedElement.offsetWidth, position)) {
      optimal.originX = 'start';
      optimal.overlayX = 'start';
      optimal.offsetX = optimal.offsetX ? optimal.offsetX * -1 : 0;
    }

    if (this.isNeedChangeTop(connectedToRef.top, connectedElement.offsetHeight, position)) {
      console.log('change top');
      optimal.originY = 'bottom';
      optimal.overlayY = 'top';
      optimal.offsetY = optimal.offsetY ? optimal.offsetY * -1 : 0;
    }

    if (this.isNeedChangeBottom(connectedToRef.bottom, connectedElement.offsetHeight, position)) {
      optimal.originY = 'top';
      optimal.overlayY = 'top';
      optimal.offsetY = optimal.offsetY ? optimal.offsetY * -1 : 0;
    }


    return optimal;
  }


  private isNeedChangeTop(top: number, height: number, position: ConnectedPosition): boolean {
    const offset: number = position.offsetY || 0;

    console.log(top, height, offset, position.originY);

    return top < (height - offset) && position.originY === 'top';
  }

  private isNeedChangeBottom(bottom: number, height: number, position: ConnectedPosition): boolean {
    const offset: number = position.offsetY || 0;

    return bottom < (height - offset) && position.originY === 'bottom';
  }

  private isNeedChangeEnd(end: number, width: number, position: ConnectedPosition): boolean {
    const offset: number = position.offsetX || 0;

    return end < (width - offset) && position.originX === 'end';
  }

  private isNeedChangeStart(start: number, width: number, position: ConnectedPosition): boolean {
    const offset: number = position.offsetX || 0;
    return start < (width - offset) && position.originX === 'start';
  }
}
