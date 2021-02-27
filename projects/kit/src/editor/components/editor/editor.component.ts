import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'air-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent {
  @ViewChild('container', {static: true}) container!: ElementRef;

  constructor() {
  }
}
