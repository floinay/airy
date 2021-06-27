import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input
} from '@angular/core';
import {randomId} from '../../../../../cdk/src/lib';
import {OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'air-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomImageComponent {
  @Input() id = randomId();
  @Input() src: string | undefined = '';
  @Input() overlayRef?: OverlayRef;

  constructor(public elementRef: ElementRef) {
  }

  close(): void {
    this.overlayRef?.detach();
  }
}
