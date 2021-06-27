import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {PortalInjectorService} from '@airy-ui/cdk/services/portal-injector.service';
import {CdkPortal, DomPortalOutlet} from '@angular/cdk/portal';

@Component({
  selector: 'air-actions-portal',
  templateUrl: './actions-portal.component.html',
  styleUrls: ['./actions-portal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsPortalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal) portal!: CdkPortal;
  @Input() containerName = 'default';
  private outlet?: DomPortalOutlet;

  constructor(private portalInjectorService: PortalInjectorService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const container = this.portalInjectorService.container(this.containerName, 'actions');
      this.outlet = this.portalInjectorService.createOutlet(container);
      this.outlet.attach(this.portal);
    });
  }

  ngOnDestroy(): void {
    this.outlet?.detach();
  }

}
