import {ChangeDetectionStrategy, Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'air-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalWrapperComponent {
  @Output() readonly onCloseButtonClick = new EventEmitter<void>();

  close() {
    this.onCloseButtonClick.emit();
  }
}
