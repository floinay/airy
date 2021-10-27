import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'air-list-item, [air-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'air-list-item'
  }
})
export class ListItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
