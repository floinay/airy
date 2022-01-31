import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';
import { CanColorCtor, HasElementRef, mixinColor, randomId, SelectionDispatcherService } from '@airy-ui/cdk';

const ButtonBase: CanColorCtor = mixinColor(HasElementRef, 'primary');

@Component({
  selector: 'air-radio-button',
  templateUrl: 'radio-button.component.html',
  styleUrls: ['radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent extends ButtonBase {
  @HostBinding('attr.tabindex')
  @Input() tabindex = 0;
  @Input() id = randomId();
  name!: string;

  @Input() set checked(value: true) {
    this.setActive(value);
  }

  @Input() value: unknown;
  @HostBinding('class.active')
  @Input() active = false;

  @HostListener('click')
  @HostListener('keyup.space')
  @HostListener('keyup.enter')
  onClick(): void {
    this.activate();
  }

  constructor(private cdr: ChangeDetectorRef, private usd: SelectionDispatcherService, elementRef: ElementRef) {
    super(elementRef);
  }

  deactivate(): void {
    this.setActive(false);
  }

  activate(emit = true): void {
    this.setActive(true);
    if (emit) {
      this.usd.notify({id: this.id, name: this.name});
    }
  }

  setActive(active: boolean): void {
    if (active !== this.active) {
      this.active = active;
      this.cdr.markForCheck();
    }
  }
}
