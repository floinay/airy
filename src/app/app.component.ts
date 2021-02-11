import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {DirectionService} from '../../projects/kit/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class AppComponent {
  direction = new FormControl(this.directionService.direction());

  constructor(private directionService: DirectionService) {
    this.direction.valueChanges.pipe(untilDestroyed(this)).subscribe(v => this.directionService.set(v));
  }
}
