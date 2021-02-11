import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';
import {TabHeaderDirective} from '../../directives';

@Component({
  selector: 'air-tab, [air-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
  @HostBinding('class.active')
  status = false;

  @ContentChild(TabHeaderDirective)
  header!: TabHeaderDirective;

  @Input() set active(value: boolean | undefined) {
    this.status = value === undefined || value;
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

}
