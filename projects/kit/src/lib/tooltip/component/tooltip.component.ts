import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'air-tooltip',
  template: `
    {{text}}
  `,
  styles: [`:host {
    display: block;
    background: #000000;
    color: #fff;
    padding: 3px 8px;
    border-radius: 4px;
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
  @Input() text = '';
}
