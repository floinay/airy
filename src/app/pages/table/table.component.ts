import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dragDisabled = true;
  data = [{name: 'Lorem is lorem lorem lorem'}, {name: 'Lorem is lorem lorem lorem'}, {name: 'Lorem is lorem lorem lorem'}, {name: 'Lorem is lorem lorem lorem'}];
  displayedColumns = ['order', 'name', 'sections', 'students', 'status', 'buttons'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
