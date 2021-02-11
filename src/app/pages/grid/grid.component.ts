import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  getGridSize(v: number): string {
    const col = 74;
    const indent = 28;
    if (v === 1) {
      return `74px`;
    }


    const w = (col * v) + (indent * (v - 1));
    return `${w}px`;
  }
}
