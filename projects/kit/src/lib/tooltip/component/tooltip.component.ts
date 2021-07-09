import {ChangeDetectionStrategy, Component, ElementRef, Input} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {randomId} from '@airy-ui/cdk';

@Component({
  selector: 'air-tooltip',
  template: `
    <div [id]="id" [innerHTML]="text"></div>
  `,
  styles: [`:host {
    display: block;
    background: #000000;
    color: #fff;
    padding: var(--indent-xxs) var(--indent-xs);
    border-radius: var(--border-radius);
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({opacity: 0.1}),
        animate(300, style({opacity: 1})),
      ]),
      transition(':leave', [
        animate(300, style({opacity: 0.1})),
      ]),
    ]),
  ],
})
export class TooltipComponent {
  id = randomId();
  @Input() text = '';

  constructor(public elementRef: ElementRef) {
  }
}
