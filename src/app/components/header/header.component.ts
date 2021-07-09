import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {DirectionService} from '../../../../projects/direction/src/lib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class HeaderComponent {
  direction = new FormControl(this.directionService.direction);

  constructor(private directionService: DirectionService) {
    this.direction.valueChanges.pipe(untilDestroyed(this)).subscribe(v => this.directionService.set(v));
  }
}
