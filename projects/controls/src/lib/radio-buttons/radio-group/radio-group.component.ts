import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef, Input, OnDestroy,
  QueryList
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadioButtonComponent} from '../radio-button/radio-button.component';
import {randomId} from '@airy-ui/cdk';
import {UniqueSelectionDispatcher} from '@angular/cdk/collections';

@Component({
  selector: 'air-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioGroupComponent), multi: true}],
})
export class RadioGroupComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {
  @Input() name = randomId();

  @ContentChildren(RadioButtonComponent) buttons!: QueryList<RadioButtonComponent>;
  private selectionListener?: () => void;

  constructor(private usd: UniqueSelectionDispatcher) {
  }

  ngAfterContentInit(): void {
    this.listenSelection();
    this.setButtonsName();
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  private setButtonsName(): void {
    this.buttons.forEach((button) => button.name = this.name);
  }

  private listenSelection(): void {
    this.selectionListener = this.usd.listen((id: string, name: string) => {
      if (name === this.name) {
        this.buttons.forEach((button) => {
          if (button.id !== id) {
            button.deactivate();
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.selectionListener) {
      this.selectionListener();
    }
  }
}
