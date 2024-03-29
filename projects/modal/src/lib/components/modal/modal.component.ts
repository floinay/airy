import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {GlobalPositionStrategy, GlobalPositionStrategyOffset} from '@airy-ui/cdk';


@Component({
  selector: 'air-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  status = false;
  @Input() width?: number | string;
  @Input() height?: number | string;
  @Input() minWidth?: number | string;
  @Input() minHeight?: number | string;
  @Input() maxHeight?: number | string;
  @Input() maxWidth?: number | string;
  @Input() hasBackdrop = true;
  @Input() backdropClass: string[] = ['air-modal-backdrop'];
  @Input() panelClass: string[] = ['air-modal-panel'];
  @Output() readonly onModalClose = new EventEmitter<void>();
  @Output() scroll = new EventEmitter<Event>();
  @Input() position: GlobalPositionStrategy = 'center';
  @Input() offset: GlobalPositionStrategyOffset;
  @Input() closeOnBackdropClick = true;

  open(): void {
    this.status = true;
    this.cdr.markForCheck();
  }

  onBackdropClick(): void {
    if (this.closeOnBackdropClick) {
      this.close();
    }
  }

  close(): void {
    this.status = false;
    this.cdr.markForCheck();
    this.onModalClose.emit();
  }

  constructor(private cdr: ChangeDetectorRef) {
  }
}
