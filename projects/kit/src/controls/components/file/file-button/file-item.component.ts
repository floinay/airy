import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {CanColorCtor, HasElementRef, mixinColor} from '../../../../cdk';

const FileButtonBase: CanColorCtor = mixinColor(HasElementRef, 'primary');

@Component({
  // tslint:disable-next-line:component-selector
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
