import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { confirmValidator } from '@airy-ui/cdk';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
  }, [confirmValidator('password', 'confirm_password')]);
  status = new FormControl(0);

  selectValues = new BehaviorSubject([{value: 1, key: 1}, {value: 2, key: 2}, {value: 3, key: 3}]);
  selectValues$ = this.selectValues.pipe(debounceTime(100));
  sliderGroup = new FormGroup(({
    opacity: new FormControl()
  }));

  constructor() {
    setTimeout(() => {
      this.status.setValue(2);
    })
  }

  ngOnInit(): void {
  }

}
