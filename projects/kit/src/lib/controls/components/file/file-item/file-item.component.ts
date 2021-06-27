import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {CanColorCtor, HasElementRef, mixinColor} from '../../../../../../../cdk/src/lib';

const FileButtonBase: CanColorCtor = mixinColor(HasElementRef, 'primary');

@Component({
  selector: 'air-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileItemComponent extends FileButtonBase {

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}
