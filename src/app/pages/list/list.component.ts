import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  showMe = true;

  constructor(cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.showMe = false;
      cdr.markForCheck();
    }, 2222);
  }

  ngOnInit(): void {
  }

}
