import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  NgZone,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {CanColorCtor, HasElementRef, mixinColor} from '@airy-ui/cdk';
import {DirectionService} from '@airy-ui/direction';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {fromEvent, Subject} from 'rxjs';
import {auditTime, filter, takeUntil} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

const SliderBase: CanColorCtor = mixinColor(HasElementRef, 'primary');

interface CounterContext {
  count: number;
}

@Component({
  selector: 'air-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'slider',
  host: {
    'attr.role': 'slider'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ]
})
@UntilDestroy()
export class SliderComponent extends SliderBase implements AfterViewInit, ControlValueAccessor {
  private readonly onPointerUp$ = new Subject<void>();
  private readonly valueChange = new Subject<void>();
  private dragStarted = false;
  private buttonX!: number;
  private viewInit = false;
  @ViewChild('button', {static: true, read: ElementRef}) button!: ElementRef<HTMLButtonElement>;
  @ViewChild('slider', {static: true, read: ElementRef}) slider!: ElementRef<HTMLDivElement>;
  @ViewChild('counterWithPercent', {static: true, read: TemplateRef}) templatePercent!: TemplateRef<CounterContext>;
  @ViewChild('backgroundContainer', {static: true, read: ElementRef}) backgroundContainer!: ElementRef<HTMLDivElement>;
  @HostBinding('attr.tabindex')
  @Input() tabindex = 0;

  @Input() showCounter = true;

  @Input() counter?: TemplateRef<CounterContext>;

  @HostBinding('attr.aria-valuemin')
  @Input() min = 0;

  @HostBinding('attr.aria-valuemax')
  @Input() max = 100;

  @Input() step = 1;

  @Input() value = 0;

  viewValue = this.value;

  get counterContext(): CounterContext {
    return {count: this.viewValue};
  }

  get maxValueContext(): CounterContext {
    return {count: this.max};
  }

  get sliderPosition(): number {
    return this.slider.nativeElement.getBoundingClientRect().x;
  }

  get sliderSize(): number {
    return this.slider.nativeElement.getBoundingClientRect().width;
  }


  constructor(private elementRef: ElementRef,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              @Inject(DOCUMENT) readonly document: Document,
              private direction: DirectionService) {
    super(elementRef)
  }

  ngAfterViewInit(): void {
    this.viewInit = true;
    this.updatePosition();
    this.ngZone.runOutsideAngular(() => {
      this.valueChange.pipe(
        auditTime(20),
        untilDestroyed(this),
        filter(() => this.viewValue != this.value)
      ).subscribe(() => {
        this.value = this.viewValue;
        this.onChange(this.value);
      });
    })
  }


  writeValue(obj: any): void {
    if (!this.dragStarted) {
      this.value = obj;
      this.viewValue = this.value;
      this.cdr.markForCheck();
      this.updatePosition();
    }
  }

  move(event: PointerEvent): void {
    const x = this.minMaxPosition(event.clientX - this.buttonX);
    const oneStepMap = this.sliderSize / this.max;
    this.viewValue = this.getValueFromX(x);
    this.cdr.markForCheck();
    this.updateButtonPosition(x);
    this.updateBackgroundWidth(this.viewValue * oneStepMap);
    this.valueChange.next();
  }


  onDragStart(): void {
    if (!this.dragStarted) {
      this.subscribeUpMove();
    }
    this.buttonX = this.sliderSize + this.sliderPosition;
    this.dragStarted = true;
  }

  onDragEnd(): void {
    this.onPointerUp$.next();
    this.dragStarted = false;
    this.valueChange.next();
  }

  private updatePosition(): void {
    if (this.viewInit) {
      const oneStepMap = this.sliderSize / this.max;
      const x = oneStepMap * this.value;
      this.updateBackgroundWidth(x);
      this.updateButtonPosition(this.minMaxPosition(this.direction.isRtl() ? x * -1 : x));
    }
  }

  private getValueFromX(x: number): number {
    return Math.abs(Math.ceil(x / this.sliderSize * 100));
  }

  private updateBackgroundWidth(width: number): void {
    this.backgroundContainer.nativeElement.style.width = width + 'px';
  }

  private updateButtonPosition(x: number): void {
    this.button.nativeElement.style.setProperty('transform', `translateX(${x}px)`);
  }

  private minMaxPosition(position: number): number {
    if (this.direction.isRtl()) {
      if (position > 0) {
        position = 0;
      } else if (position < (this.sliderSize * -1)) {
        position = this.sliderSize * -1;
      }
    } else {
      if (position < 0) {
        position = 0;
      } else if (position > this.sliderSize) {
        position = this.sliderSize;
      }
    }

    return position;
  }

  private subscribeUpMove(): void {
    this.ngZone.run(() => {
      fromEvent<PointerEvent>(this.document, 'pointerup')
        .pipe(takeUntil(this.onPointerUp$), untilDestroyed(this))
        .subscribe(this.onDragEnd.bind(this));
      fromEvent<PointerEvent>(this.document, 'pointercancel')
        .pipe(takeUntil(this.onPointerUp$), untilDestroyed(this))
        .subscribe(this.onDragEnd.bind(this));
      fromEvent<PointerEvent>(this.document, 'pointermove')
        .pipe(takeUntil(this.onPointerUp$), untilDestroyed(this))
        .subscribe(this.move.bind(this));
    });
  }

  private onChange(value: number): void {
  }

  private ontTouched() {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.ontTouched = fn;
  }
}

