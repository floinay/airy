import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, Input} from '@angular/core';
import {UniqueSelectionDispatcher} from '@angular/cdk/collections';
import {randomId} from '../../../../../../cdk/src/lib';


@Component({
  selector: 'air-radio-button',
  templateUrl: 'radio-button.component.html',
  styleUrls: ['radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  @Input() id = randomId();
  name!: string;
  @Input() value: unknown;
  @HostBinding('class.active')
  active = false;

  @HostListener('click')
  @HostListener('keyup.space')
  @HostListener('keyup.enter')
  onClick(): void {
    this.activate();
  }

  constructor(private cdr: ChangeDetectorRef, private usd: UniqueSelectionDispatcher) {
  }

  deactivate(): void {
    this.setActive(false);
  }

  activate(): void {
    this.setActive(true);
    this.usd.notify(this.id, this.name);
  }

  setActive(active: boolean): void {
    if (active !== this.active) {
      this.active = active;
      this.cdr.markForCheck();
    }
  }
}
