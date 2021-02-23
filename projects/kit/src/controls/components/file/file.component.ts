import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {FileInterface} from './file.interface';
import {fileFromEvent, ThemePalette} from '../../../cdk';
import {AIR_FILE_OPTIONS} from '../../air-controls.providers';
import {FileComponentOptions} from '../../interfaces/file-component.options';

@Component({
  selector: 'air-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent {
  @Input() accept = '*';
  @Input() multiple = false;
  @Input() files?: FileInterface[];
  @Input() placeholder = this.options.defaultPlaceholder;
  @Input() description = this.options.defaultDescription;
  @Input() multipleDescription = this.options.defaultMultipleDescription;
  @Input() multiplePlaceholder = this.options.defaultMultiplePlaceholder;
  @Input() color: ThemePalette = 'primary';
  @Input() showDescriptionAnyway = false;
  @Output() onFileChanged = new EventEmitter<File>();

  get currentDescription(): string {
    return this.multiple ? this.multipleDescription : this.description;
  }

  get currentPlaceholder(): string {
    return this.multiple ? this.multiplePlaceholder : this.placeholder;
  }

  constructor(@Inject(AIR_FILE_OPTIONS) readonly options: FileComponentOptions) {
  }

  inputChanged($event: Event): void {
    const file = fileFromEvent($event);
    if (file) {
      this.onFileChanged.emit(file);
    }
  }
}
