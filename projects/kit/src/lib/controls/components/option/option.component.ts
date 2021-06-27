import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, HostBinding, HostListener,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {SelectionDispatcherService} from '../../../../../../cdk/src/lib/services/selection-dispatcher.service';

@Component({
  selector: 'air-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent {
  @ViewChild(TemplateRef, {static: true}) content!: TemplateRef<any>;
  id!: string;
  private nameCache?: string;

  set name(name: string | undefined) {
    this.nameCache = name;
    if (this.activateAfterInit) {
      this.activate();
    }
  }

  get name(): string | undefined {
    return this.nameCache;
  }

  @Input() value: any;

  private previousStatus = false;
  private activateAfterInit = false;

  @HostBinding('class.active')
  selected = false;

  @Input() set active(status: boolean | '') {
    if (status === '' || true) {
      if (this.name) {
        this.activate();
      } else {
        this.activateAfterInit = true;
      }

    } else {
      this.deactivate();
    }
  }

  @HostListener('click')
  onClick(): void {
    this.activate();
  }

  constructor(private cdr: ChangeDetectorRef,
              private elementRef: ElementRef,
              private selectionDispatcher: SelectionDispatcherService) {
  }


  get templateView(): string {
    return this.elementRef.nativeElement.textContent || '';
  }

  setActive(status: boolean): void {
    if (status !== this.previousStatus) {
      this.previousStatus = status;
      this.cdr.markForCheck();
    }
  }

  deactivate(): void {
    this.activateAfterInit = false;
    this.setActive(false);
  }

  activate(notify = true): void {
    this.setActive(true);
    this.select();
    if (notify) {
      this.selectionDispatcher.notify({id: this.id, name: 'active-' + this.name});
    }
  }

  select(): void {
    this.setSelected(true);
    this.selectionDispatcher.notify({id: this.id, name: 'select-' + this.name});
  }

  unselect(): void {
    this.setSelected(false);
  }

  setSelected(selected: boolean): void {
    if (this.selected !== selected) {
      this.selected = selected;
      this.cdr.markForCheck();
    }
  }
}
