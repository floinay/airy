import {Directive, HostBinding, Input} from '@angular/core';
import {DirectionService} from '@airy-ui/direction';
import {StringObject} from '@airy-ui/cdk';
import {merge} from 'lodash-es';
import {StylesService} from '@airy-ui/cdk';

type ImpositionTo =
  'top start'
  | 'bottom start'
  | 'top end'
  | 'bottom end'
  | 'center center'
  | 'top center'
  | 'bottom center'
  | 'center start'
  | 'center end';

type LeftOrRight = 'left' | 'right';

const DEFAULT_STYLES = {zIndex: '20'};

@Directive({
  selector: '[airImpositionTo]',
  providers: [StylesService]
})
export class ImpositionDirective {
  @HostBinding('style.position') position = 'absolute';

  @Input() set airImpositionTo(value: ImpositionTo) {
    this.stylesService.style(merge(this.getStyles(value), DEFAULT_STYLES));
  }

  constructor(private directionService: DirectionService, private stylesService: StylesService) {
  }

  private get start(): LeftOrRight {
    if (this.directionService.isLtr()) {
      return 'left';
    } else {
      return 'right';
    }
  }

  private get end(): LeftOrRight {
    if (this.directionService.isLtr()) {
      return 'right';
    } else {
      return 'left';
    }
  }


  private getStyles(value: ImpositionTo): StringObject {
    if (value === 'top start') {
      return {top: '0', [this.start]: '0'};
    }
    if (value === 'top end') {
      return {top: '0', [this.end]: '0'};
    }

    if (value === 'bottom end') {
      return {bottom: '0', [this.end]: '0'};
    }

    if (value === 'center center') {
      return {top: '0', bottom: '0', right: '0', left: '0', margin: 'auto'}
    }

    if (value === 'top center') {
      return {top: '0', left: '0', right: '0', margin: '0 auto'};
    }

    if (value === 'bottom center') {
      return {bottom: '0', left: '0', right: '0', margin: '0 auto'};
    }

    if (value === 'center start') {
      return {bottom: '0', top: '0', [this.start]: '0', margin: 'auto 0'};
    }

    if (value === 'center end') {
      return {bottom: '0', top: '0', [this.end]: '0', margin: 'auto 0'};
    }

    return {bottom: '0', [this.start]: '0'};
  }


}
