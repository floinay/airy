import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {OptionComponent} from '@airy-ui/controls/components/option/option.component';
import {randomId} from '../../../../../../cdk/src/lib';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {SelectionDispatcherService} from '@airy-ui/cdk/services/selection-dispatcher.service';

@Component({
  selector: 'air-autocomplete',
  templateUrl: './autocomplete.component.html',
  exportAs: 'autocomplete',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class AutocompleteComponent implements AfterViewInit {
  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<any>;
  @ContentChildren(OptionComponent) options?: QueryList<OptionComponent>;
  @Input() name = randomId('autocomplete');
  @Input() displayWith?: <T>(value: T) => string;
  private selected?: OptionComponent;
  private active?: OptionComponent;

  @Output() readonly onValueChange = new EventEmitter<string>()

  constructor(private selectionDispatcher: SelectionDispatcherService, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.options?.changes.pipe(untilDestroyed(this)).subscribe(() => this.setNameAndId());
    this.setNameAndId();
    this.listenActivation();
    this.listenSelection();
  }

  setActive(): void {
    this.options?.toArray()[this.getSelectedId()].activate();
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

  down(): void {
    let id = -1;
    if (this.selected) {
      id = this.getSelectedId();
    }

    if (this.options) {
      if (id !== this.options.length - 1) {
        ++id;
      }

      this.options.toArray()[id].select();
    }
  }

  private setNameAndId(): void {
    this.options?.forEach((option, id) => {
      option.name = this.name;
      option.id = String(id);
    });
  }

  private unselectPrevious(id: string): void {
    this.options?.forEach(option => {
      if (option.id !== id) {
        option.unselect();
      }
    });
  }

  private listenSelection(): void {
    this.selectionDispatcher.listen('select-' + this.name).pipe(untilDestroyed(this)).subscribe(id => {
      this.unselectPrevious(id);
      this.selected = this.options?.find(option => option.id === id) as OptionComponent;
      this.cdr.markForCheck();
    });
  }

  private listenActivation(): void {
    this.selectionDispatcher.listen('active-' + this.name).pipe(untilDestroyed(this)).subscribe(id => {
      this.disablePrevious(id);
      const active = this.active = this.options?.find(option => option.id === id);
      if (active) {
        if (this.displayWith) {
          this.onValueChange.emit(this.displayWith(active.value));
        } else {
          this.onValueChange.emit(active.value);
        }
        this.cdr.markForCheck();
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
}
