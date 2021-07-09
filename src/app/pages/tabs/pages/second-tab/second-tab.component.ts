import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
