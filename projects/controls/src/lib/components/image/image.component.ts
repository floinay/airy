import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {fileFromEvent} from '@airy-ui/cdk';

@Component({
  selector: 'air-image-upload',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Input() width!: number;
  @Input() height!: number;
  @Input() src?: string;
  @Output() readonly onImageUpload = new EventEmitter<File>();

  @HostBinding('style.--width')
  get widthInPx(): string {
    return this.width + 'px';
  }

  @HostBinding('style.--height')
  get heightInPx(): string {
    return this.height + 'px';
  }

  constructor() {
  }

  inputChanged($event: Event): void {
    const file = fileFromEvent($event);
    if (file) {
      this.onImageUpload.emit(file);
    }
  }
}
