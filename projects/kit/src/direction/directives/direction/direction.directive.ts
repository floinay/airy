import {Directive} from '@angular/core';
import {DirectionService} from '../../services';
import {Direction} from '@angular/cdk/bidi';

@Directive({
  selector: '[airDirection]',
  exportAs: 'direction'
})
export class DirectionDirective {

  constructor(private directionService: DirectionService) {
  }

  switch(): void {
    this.directionService.switch();
  }

  isLtr(): boolean {
    return this.directionService.isLtr();
  }

  isRtl(): boolean {
    return this.directionService.isRtl();
  }

  set(direction: Direction): void {
    this.directionService.set(direction);
  }
}
