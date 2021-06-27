import {Directive, ElementRef, Input, OnInit, ViewContainerRef} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {Overlay} from '@angular/cdk/overlay';
import {PopoverComponentInterface} from '../../interfaces';
import {PopoverHideEvent, PopoverPosition, PopoverService, PopoverShowEvent} from './popover.service';


@Directive({
  selector: '[airPopover]',
  exportAs: 'popover',
  providers: [PopoverService]
})
@UntilDestroy()
export class PopoverDirective implements OnInit {

  @Input() set airPopover(component: PopoverComponentInterface) {
    this.popoverService.setPopover(component);
  }

  @Input() set airPopoverShowEvent(value: PopoverShowEvent) {
    this.popoverService.setShowEvent(value);
  }

  @Input() set airPopoverPosition(value: PopoverPosition) {
    this.popoverService.setPosition(value);
  }

  @Input() set airPopoverHideEvent(value: PopoverHideEvent) {
    this.popoverService.setHideEvent(value);
  }

  @Input() set airPopoverHideDebounce(value: number) {
    this.popoverService.setHideDebounce(value);
  }

  constructor(private elementRef: ElementRef,
              private overlay: Overlay,
              private viewContainerRef: ViewContainerRef,
              private popoverService: PopoverService) {
  }

  ngOnInit(): void {
  }
}
