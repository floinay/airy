import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {fileFromEvent, ThemePalette, ThemeSize} from '@airy-ui/cdk';
import {AirFill} from '@airy-ui/button';

@Component({
  selector: 'air-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent {
  @Input() accept = '*';
  @Input() multiple = false;
  @Input() color: ThemePalette = 'primary';
  @Input() fill: AirFill;
  @Input() size: ThemeSize = 'm';
  @Output() onFileUpload = new EventEmitter<File>();

  constructor() {
  }

  inputChanged($event: Event): void {
    const file = fileFromEvent($event);
    if (file) {
      this.onFileUpload.emit(file);
    }
  }
}
