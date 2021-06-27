import {ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector} from '@angular/core';
import {portalContainerId} from '../helpers/portal-container-id';
import {DOCUMENT} from '@angular/common';
import {DomPortalOutlet} from '@angular/cdk/portal';

/**
 * @dynamic
 */
@Injectable({providedIn: 'root'})
export class PortalInjectorService {

  constructor(@Inject(DOCUMENT) readonly document: Document,
              private appRef: ApplicationRef,
              private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  /**
   * Please wrap this function call in setTimeout without timing.
   */
  container(name: string, prefix: string): Element {
    const element = this.document.getElementById(portalContainerId(name, prefix));
    if (!element) {
      throw new Error(`${prefix} portal error, not found container with name ${name}`)
    }
    return element;
  }

  createOutlet(container: Element): DomPortalOutlet {
    return new DomPortalOutlet(container, this.componentFactoryResolver, this.appRef, this.injector)
  }
}
