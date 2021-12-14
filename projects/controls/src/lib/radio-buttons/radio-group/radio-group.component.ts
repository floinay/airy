import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef, HostBinding, Input, OnDestroy,
  QueryList
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { randomId, SelectionDispatcherService } from '@airy-ui/cdk';
import { Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'air-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioGroupComponent), multi: true}],
})
@UntilDestroy()
export class RadioGroupComponent implements ControlValueAccessor, AfterContentInit {
  @Input() name = randomId();
  @HostBinding('attr.tabindex')
  @Input() tabindex = 0;
  @ContentChildren(RadioButtonComponent) buttons!: QueryList<RadioButtonComponent>;
  private selectionListener?: Subscription;
  private value: any;
  @Input('value') previousValue: any;
  private initialized = false;
  activeButton?: RadioButtonComponent;

  constructor(private usd: SelectionDispatcherService) {
  }

  ngAfterContentInit(): void {
    this.listenSelection();
    this.setButtonsName();
    this.buttons.changes.pipe(untilDestroyed(this)).subscribe(() => {
      this.setButtonsName();
      this.setActive();
    });
    this.initialized = true;
    this.setActive();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    if (this.initialized) {
      this.value = obj;
      this.setActive();
    } else {
      this.previousValue = obj;
    }
  }

  private setButtonsName(): void {
    this.buttons.forEach((button) => button.name = this.name);
  }

  private setActive(): void {
    const value = this.previousValue ? this.previousValue : this.value;
    this.buttons.forEach(button => {
      if (button.value === value) {
        button.activate(false);
        if (this.previousValue) {
          this.value = this.previousValue;
          this.previousValue = undefined;
        }
      } else {
        button.deactivate();
      }
    });
  }

  private listenSelection(): void {
    this.selectionListener = this.usd.listen(this.name).pipe(untilDestroyed(this)).subscribe(id => {
      this.buttons.forEach((button) => {
        if (button.id !== id) {
          button.deactivate();
        } else {
          this.onChange(button.value);
        }
      });
    });
  }

  onChange(value: any): void {
  }

  onTouched(): void {

  }
}
