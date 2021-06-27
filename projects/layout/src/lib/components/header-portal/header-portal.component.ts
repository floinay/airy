import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {CdkPortal, DomPortalOutlet} from '@angular/cdk/portal';
import {PortalInjectorService} from '@airy-ui/cdk';

@Component({
  selector: 'air-header-portal',
  templateUrl: './header-portal.component.html',
  styleUrls: ['./header-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderPortalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal) portal!: CdkPortal;
  @Input() containerName = 'default';
  private outlet?: DomPortalOutlet;

  constructor(private portalInjectorService: PortalInjectorService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const container = this.portalInjectorService.container(this.containerName, 'header');
      this.outlet = this.portalInjectorService.createOutlet(container);
      this.outlet.attach(this.portal);
    })
  }

  ngOnDestroy(): void {
    this.outlet?.detach();
  }

}
