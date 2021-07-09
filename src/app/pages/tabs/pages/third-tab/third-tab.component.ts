import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-tab',
  templateUrl: './third-tab.component.html',
  styleUrls: ['./third-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdTabComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
