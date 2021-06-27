import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  forwardRef,
  Input,
  NgZone,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {fromEvent} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {auditTime} from 'rxjs/operators';

@Component({
  selector: 'air-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputColorComponent), multi: true}]
})
@UntilDestroy()
export class InputColorComponent implements ControlValueAccessor, AfterViewInit {
  value?: string = undefined;
  @Input() placeholder?: string;

  @ViewChild('inputElement', {read: ElementRef, static: true}) input!: ElementRef<HTMLInputElement>;

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {

  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => fromEvent<InputEvent>(this.input.nativeElement, 'input').pipe(
      auditTime(20),
      untilDestroyed(this),
      ).subscribe((e) => {
        const target = e.target as HTMLInputElement;
        this.onColorChange(target.value);
      })
    );
  }

  onColorChange(value: string): void {
    this.onChange(value);
    this.value = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string): void {
    this.value = obj;
    this.cdr.markForCheck();
  }

  private onChange(value: string): void {
  }

  onTouched(): void {
  }

}
