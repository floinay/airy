import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'air-list, air-counter-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @HostBinding('class.counter-list')
  get counterList() {
    return this.elementRef.nativeElement.tagName === 'AIR-COUNTER-LIST';
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

}
