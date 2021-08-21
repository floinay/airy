import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {confirmValidator} from '@airy-ui/cdk';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent implements OnInit {
  loadedFile?: File;
  passwordsGroup = new FormGroup({
    password: new FormControl(),
    confirm_password: new FormControl()
  }, [confirmValidator('password', 'confirm_password')])

  constructor() {
  }

  ngOnInit(): void {
  }

}
