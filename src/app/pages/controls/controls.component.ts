import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { confirmValidator } from '@airy-ui/cdk';
import { BehaviorSubject, timer } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent implements OnInit {
  timer$ = timer(1000).pipe(take(1), map(() => true));
  loadedFile?: File;
  passwordsGroup = new FormGroup({
    password: new FormControl(),
    confirm_password: new FormControl()
  }, [confirmValidator('password', 'confirm_password')]);
  status = new FormControl(0);
  radio = new FormControl('first');

  selectValues = new BehaviorSubject([{value: 1, key: 1}, {value: 2, key: 2}, {value: 3, key: 3}]);
  selectValues$ = this.selectValues.pipe(debounceTime(100));
  sliderGroup = new FormGroup(({
    opacity: new FormControl()
  }));

  constructor() {
    setTimeout(() => {
      this.status.setValue(2);
    });
  }

  ngOnInit(): void {
    this.radio.valueChanges.subscribe(v => console.log(v));
  }

}
