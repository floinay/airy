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
  private subscription: any;
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
  @Input() currentValue!: number;

  viewValue = this.value;

  get counterContext(): CounterContext {
    return {count: this.viewValue || 0};
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

  get valueRange(): number {
    return this.max - this.min;
  }


  constructor(private elementRef: ElementRef,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              @Inject(DOCUMENT) readonly document: Document,
              private direction: DirectionService) {
    super(elementRef);
  }

  sliderInit() {
    this.viewInit = true;
    this.viewValue = this.value = this.value || this.currentValue || this.min || 0;

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
    });
  }

  ngAfterViewInit(): void {
    if (!this.subscription) {
      this.subscription = this.direction.getState().subscribe(() => {
        this.sliderInit();
      });
    } else {
      this.sliderInit();
    }
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
    this.viewValue = this.getValueFromX(x);
    this.cdr.markForCheck();
    this.updateButtonPosition(x);
    this.updateBackgroundWidth(x < 0 ? x * -1 : x);
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
      const oneStepMap = this.sliderSize / this.valueRange;
      const x = oneStepMap * (this.value - this.min);
      this.updateBackgroundWidth(x);
      this.updateButtonPosition(this.direction.isRtl() ? x * -1 : x);
      this.cdr.markForCheck();
    }
  }

  private getValueFromX(x: number): number {
    return Math.abs(Math.ceil(x / this.sliderSize * (this.valueRange) + this.min - 0.5));
  }

  private updateBackgroundWidth(width: number): void {
    this.backgroundContainer.nativeElement.style.width = width + 'px';
    this.backgroundContainer.nativeElement.style.left = 'unset';
    this.backgroundContainer.nativeElement.style.right = 'unset';
  }

  private updateButtonPosition(x: number): void {
    const SLIDER_BUTTON_HALF_WIDTH = 7;
    x += this.direction.isRtl() ? SLIDER_BUTTON_HALF_WIDTH : -SLIDER_BUTTON_HALF_WIDTH;
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
      if (position > 0) {
        position = this.sliderSize;
      } else if (position < (this.sliderSize * -1)) {
        position = 0;
      } else {
        position = this.sliderSize + position;
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

