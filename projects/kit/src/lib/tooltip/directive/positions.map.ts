import { Positions, X, Y } from './tooltip.types';
import { ConnectedPosition } from '@angular/cdk/overlay';

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
    overlayX: x,
    overlayY: y,
    originY: invertY(y),
    originX: invertX(x),
    offsetX: offset(x),
    offsetY: offset(y)
  };
}

function offset(xOrY: X | Y): number | undefined {
  if (xOrY === 'top' || xOrY === 'start') {
    return -3;
  }

  if (xOrY === 'bottom' || xOrY === 'end') {
    return 3;
  }

  return undefined;
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
