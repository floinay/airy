import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Input,
  QueryList
} from '@angular/core';
import {OptionComponent} from '../option/option.component';
import {randomId, SelectionDispatcherService} from '../../../cdk';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const CONNECTED_POSITIONS: ConnectedPosition[] = [
  {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
  {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom',
  },
];

@Component({
  selector: 'air-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true}],
})
@UntilDestroy()
export class SelectComponent implements AfterContentInit, ControlValueAccessor {

  get clientWidth(): number {
    return this.elementRef.nativeElement.clientWidth;
  }

  constructor(private selectionDispatcher: SelectionDispatcherService,
              public elementRef: ElementRef<HTMLDivElement>,
              private cdr: ChangeDetectorRef) {
  }

  positions: ConnectedPosition[] = CONNECTED_POSITIONS;
  @Input() name = randomId('select');

  @Input() placeholder = '';

  active?: OptionComponent;
  selected!: OptionComponent;

  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent>;

  @Input() opened = false;

  ngAfterContentInit(): void {
    this.listenActivation();
    this.listenSelection();
    this.setNameAndIds();
  }

  close(): void {
    this.opened = false;
    this.cdr.markForCheck();
  }

  open(): void {
    this.opened = true;
    if (!this.selected) {
      this.options.toArray()[0].select();
    }
    this.cdr.markForCheck();
  }

  down(): void {
    let id = this.getSelectedId();
    if (id !== this.options.length - 1) {
      ++id;
    }
    this.options.toArray()[id].select();
  }

  up(): void {
    let id = this.getSelectedId();
    if (id !== 0) {
      --id;
    }
    this.options.toArray()[id].select();
  }


  writeValue(value: any): void {
    this.options.forEach(option => {
      if (option.value === value) {
        option.activate(false);
        this.active = option;
      } else {
        option.deactivate();
      }
    });
  }

  setActive(): void {
    this.options.toArray()[this.getSelectedId()].activate();
  }


  private listenSelection(): void {
    this.selectionDispatcher.listen('select-' + this.name).pipe(untilDestroyed(this)).subscribe(id => {
      this.onTouched();
      this.unselectPrevious(id);
      this.selected = this.options.find(option => option.id === id) as OptionComponent;
      this.cdr.markForCheck();
    });
  }

  private listenActivation(): void {
    this.selectionDispatcher.listen('active-' + this.name).pipe(untilDestroyed(this)).subscribe(id => {
      this.disablePrevious(id);
      this.active = this.options.find(option => {
        return option.id === id && option.value !== undefined;
      });
      this.onChange(this.active?.value);
      this.close();
      this.cdr.markForCheck();
    });
  }

  private unselectPrevious(id: string): void {
    this.options.forEach(option => {
      if (option.id !== id) {
        option.unselect();
      }
    });
  }

  private disablePrevious(id: string): void {
    this.options.forEach(option => {
      if (option.id !== id) {
        option.deactivate();
      }
    });
  }

  private getSelectedId(): number {
    return this.selected ? Number(this.selected.id) : 0;
  }

  private setNameAndIds(): void {
    this.options.forEach((option, index) => {
      option.name = this.name;
      option.id = String(index);
    });
  }

  onChange(value: any): void {

  }

  onTouched(): void {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
