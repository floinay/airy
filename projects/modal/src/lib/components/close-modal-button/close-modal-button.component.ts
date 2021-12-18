import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'air-modal-close',
  templateUrl: './close-modal-button.component.html',
  styleUrls: ['./close-modal-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseModalButtonComponent {
  @Input() color = "danger"
  @Input() size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | string = 'm';
}
