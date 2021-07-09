import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('test travis');
  }

}
