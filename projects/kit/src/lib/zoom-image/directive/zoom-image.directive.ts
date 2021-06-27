import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {fromEvent} from 'rxjs';
import {ZoomImageService} from '@airy-ui/kit/zoom-image/services';

type ZoomImageShowEvent = 'click' | 'mouseenter';

@Directive({
  selector: '[airZoomImage]',
  exportAs: 'zoom-image'
})
@UntilDestroy()
export class ZoomImageDirective implements OnInit {
  @Input() airZoomImageShowEvent: ZoomImageShowEvent = 'click';

  constructor(private elementRef: ElementRef,
              private zoomImageService: ZoomImageService) {
    this.elementRef.nativeElement.style.maxWidth = "640px";
  }

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, this.airZoomImageShowEvent)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.zoomImageService.open(this.elementRef.nativeElement.src));
  }
}
