import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  QueryList
} from '@angular/core';
import {OptionComponent} from '../option/option.component';
import {randomId} from '@airy-ui/cdk';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ConnectedPosition} from '@angular/cdk/overlay';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SelectionDispatcherService} from '@airy-ui/cdk';

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
  @Output() readonly onChange = new EventEmitter<any>();

  @HostBinding('style.max-width')
  get clientWidth(): number {
    return Math.round(this.elementRef.nativeElement.getBoundingClientRect().width);
  }

  private lastValue?: any;

  constructor(private selectionDispatcher: SelectionDispatcherService,
              public elementRef: ElementRef<HTMLDivElement>,
              private cdr: ChangeDetectorRef) {
  }

  positions: ConnectedPosition[] = CONNECTED_POSITIONS;
  @Input() name = randomId('select');

  @Input() placeholder = '';

  active?: OptionComponent;
  selected!: OptionComponent;

  @ContentChildren(OptionComponent) options?: QueryList<OptionComponent>;

  @HostBinding('class.opened')
  @Input() opened = false;

  ngAfterContentInit(): void {
    this.listenActivation();
    this.listenSelection();
    if (this.options) {
      this.setNameAndIds(this.options);
      this.options.changes.pipe(untilDestroyed(this)).subscribe(options => {
        this.setNameAndIds(options);
        this.setLastValueIfExists();
      });
      this.setLastValueIfExists();
    }

    this.activateEmptyValueOption();
  }

  close(): void {
    this.opened = false;
    this.cdr.markForCheck();
  }

  @HostListener('click')
  open(): void {
    this.opened = true;
    if (!this.selected && this.options) {
      this.options.toArray()[0].select();
    }
    this.cdr.markForCheck();
  }

  down(): void {
    let id = this.getSelectedId();
    if (this.options) {
      if (id !== this.options.length - 1) {
        ++id;
      }

      this.options.toArray()[id].select();
    }
  }

  up(): void {
    let id = this.getSelectedId();
    if (id !== 0) {
      --id;
    }
    if (this.options) {
      this.options.toArray()[id].select();
    }
  }


  writeValue(value: any): void {
    if (this.options) {
      this.activate(value);
    } else {
      this.lastValue = value;
    }
  }

  setActive(): void {
    this.options?.toArray()[this.getSelectedId()].activate();
  }

  private setLastValueIfExists(): void {
    if (this.lastValue !== undefined) {
      this.activate(this.lastValue);
      this.lastValue = undefined;
    }
  }

  private activateEmptyValueOption() {
    if (!this.lastValue && !this.active && !this.placeholder) {
      const noValueOption = this.options?.find(option => option.value === undefined || option.value === '');
      if (noValueOption) {
        noValueOption.activate(false);
        this.active = noValueOption;
        this.onChange.emit(noValueOption.value);
        this._onChange(noValueOption.value);
      }
    }
  }

  private activate(value: any) {
    console.log(value);
    this.options?.forEach(option => {
      if (option.value === value) {
        option.activate(false);
        this.active = option;
      } else {
        option.deactivate();
      }
    });
  }

  private listenSelection(): void {
    this.selectionDispatcher.listen('select-' + this.name).pipe(untilDestroyed(this)).subscribe(id => {
      this.onTouched();
      this.unselectPrevious(id);
      this.selected = this.options?.find(option => option.id === id) as OptionComponent;
      this.cdr.markForCheck();
    });
  }

  private listenActivation(): void {
    this.selectionDispatcher.listen('active-' + this.name).pipe(untilDestroyed(this)).subscribe(id => {
      this.disablePrevious(id);
      this.active = this.options?.find(option => {
        return option.id === id;
      });
      this._onChange(this.active?.value);
      this.onChange.emit(this.active?.value);
      this.close();
      this.cdr.markForCheck();
    });
  }

  private unselectPrevious(id: string): void {
    this.options?.forEach(option => {
      if (option.id !== id) {
        option.unselect();
      }
    });
  }

  private disablePrevious(id: string): void {
    this.options?.forEach(option => {
      if (option.id !== id) {
        option.deactivate();
      }
    });
  }

  private getSelectedId(): number {
    return this.selected ? Number(this.selected.id) : 0;
  }

  private setNameAndIds(options: QueryList<OptionComponent>): void {
    options.forEach((option, index) => {
      option.name = this.name;
      option.id = String(index);
    });
  }

  _onChange(value: any): void {

  }

  onTouched(): void {

  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
