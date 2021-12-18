import { Injectable } from '@angular/core';
import { Overlay, PositionStrategy } from '@angular/cdk/overlay';
import { DirectionService } from '@airy-ui/direction';

export type GlobalPositionStrategy =
  'top'
  | 'center'
  | 'start'
  | 'end'
  | 'bottom'
  | 'top start'
  | 'top end'
  | 'top center'
  | 'bottom start'
  | 'bottom end'
  | 'bottom center'
  | 'center top'
  | 'center bottom';

/**
 * Offsets y x
 * @example 20px 20px
 */
export type GlobalPositionStrategyOffset = string | undefined;

@Injectable({
  providedIn: 'root'
})
export class GlobalPositionStrategyBuilderService {
  constructor(private overlay: Overlay, private direction: DirectionService) {
  }

  build(value: GlobalPositionStrategy, offset?: GlobalPositionStrategyOffset): PositionStrategy {
    const strategy = this.overlay.position().global();
    const [y, x] = this.getYX(value);
    const [offsetY, offsetX] = this.getOffsetYX(offset);
    if (y === 'top') {
      strategy.top(offsetY);
    } else if (y === 'bottom') {
      strategy.bottom(offsetY);
    } else {
      strategy.centerVertically(offsetY);
    }

    if (x === 'start') {
      if (this.direction.isLtr()) {
        strategy.left(offsetX);
      } else {
        strategy.right(offsetY);
      }
    } else if (x === 'end') {
      if (this.direction.isLtr()) {
        strategy.right(offsetX);
      } else {
        strategy.left(offsetX);
      }
    } else if (x === 'center') {
      strategy.centerHorizontally(offsetX);
    }

    return strategy;
  }

  private getYX(value: GlobalPositionStrategy): string[] {
    const values = value.split(' ');
    if (values.length === 1) {
      return [value, value];
    }

    return [values[0], values[1]];
  }

  private getOffsetYX(value?: GlobalPositionStrategyOffset): string[] {
    if (!value) {
      return ['0', '0'];
    }
    const values = value.split(' ');
    if (values.length === 1) {
      return [value, value];
    }

    return [values[0], values[1]];
  }
}
