import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
