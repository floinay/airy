import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { random } from 'lodash-es';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  showMe = true;

  get randBool(): boolean {
    return !!random(1);
  }

  constructor(cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.showMe = false;
      cdr.markForCheck();
    }, 2222);
  }

  ngOnInit(): void {
  }

}
