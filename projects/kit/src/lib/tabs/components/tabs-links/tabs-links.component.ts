import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

type TabsMode = 'buttons' | 'tabs';

@Component({
  selector: 'air-tabs-links, [air-tabs-links]',
  templateUrl: './tabs-links.component.html',
  styleUrls: ['./tabs-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsLinksComponent {
  @Input() mode: TabsMode = 'tabs';

  @HostBinding('class.mode-tabs')
  get modeTabs(): boolean {
    return this.mode === 'tabs';
  }

  @HostBinding('class.mode-buttons')
  get modeButtons(): boolean {
    return this.mode === 'buttons';
  }

  constructor() {
  }
}
