import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input} from '@angular/core';
import {DirectionService} from '@airy-ui/direction';

type ScrollStrategy = 'auto' | 'visible' | 'scroll';

interface ScrollTo {
  x?: number;
  y?: number;
}

@Component({
  selector: 'air-scroll-container, [air-scroll-container]',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollContainerComponent implements AfterViewInit {
  private viewInitialized = false;
  private scrollPositionCache: ScrollTo = {x: 0, y: 0};
  @HostBinding('style.overflow-y')
  @Input() scrollX: ScrollStrategy = 'auto';

  @HostBinding('style.overflow-x')
  @Input() scrollY: ScrollStrategy = 'auto';

  @Input() set scrollPositionX(x: number) {
    this.scrollTo({x});
    if (this.viewInitialized) {
      this.scrollTo({x});
    } else {
      this.scrollPositionCache.x = x;
    }
  }

  @Input() set scrollPositionY(value: number) {
    if (this.viewInitialized) {
      this.elementRef.nativeElement.scrollTo({top: value});
    } else {
      this.scrollPositionCache.y = value;
    }
  }

  private scrollTo({x, y}: ScrollTo) {
    if (x && this.directionService.isRtl()) {
      x = x * -1;
    }
    this.elementRef.nativeElement.scrollTo({top: y, left: x});
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>, private directionService: DirectionService) {
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    if (this.scrollPositionCache.x || this.scrollPositionCache.y) {
      this.scrollTo(this.scrollPositionCache);
    }
  }
}
