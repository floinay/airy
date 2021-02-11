import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'air-tabs, [air-tabs]',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {
  @Input() active = 0;

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.setDefaultActiveTab();
  }

  setActiveTab(tab: TabComponent): void {
    this.tabs.forEach(cTab => cTab.active = false);
    tab.active = true;
  }

  private setDefaultActiveTab(): void {
    this.tabs.toArray()[this.active].active = true;
  }
}
