import {Positions, X, Y} from './tooltip.types';
import {ConnectedPosition} from '@angular/cdk/overlay';

export const positionsMap: { [key: string]: { x: string, y: string }; } = {
  'top center': {x: 'center', y: 'top'},
  'top start': {x: 'start', y: 'top'},
  'top end': {x: 'end', y: 'top'},
  'bottom center': {x: 'center', y: 'bottom'},
  'bottom start': {x: 'start', y: 'bottom'},
  'bottom end': {x: 'end', y: 'bottom'},
  'center end': {x: 'end', y: 'center'},
  'center start': {x: 'start', y: 'center'},
};


export function mapPosition(position: Positions): ConnectedPosition {
  // @ts-ignore
  const {x, y}: { x: X, y: Y } = positionsMap[position];
  return {
    overlayX: invertX(x),
    overlayY: invertY(y),
    originY: y,
    originX: x,
    offsetX: offsetX(x),
    offsetY: offsetY(y)
  };
}

function offsetX(x: X): number {
  if (x === 'start') {
    return -3;
  }

  if (x === 'end') {
    return 3;
  }

  return 0;
}

function offsetY(y: Y): number {
  if (y === 'top') {
    return -3;
  }

  if (y === 'bottom') {
    return 3;
  }

  return 0;
}


function invertY(y: Y): Y {
  if (y === 'top') {
    y = 'bottom';
  } else if (y === 'bottom') {
    y = 'top';
  }

  return y;
}

function invertX(x: X): X {
  if (x === 'start') {
    x = 'end';
  } else if (x === 'end') {
    x = 'start';
  }

  return x;
}
