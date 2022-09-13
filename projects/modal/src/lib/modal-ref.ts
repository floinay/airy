import {OverlayRef} from '@angular/cdk/overlay';
import {Subject, Subscription} from 'rxjs';

interface AfterClose<T> {
  onBackdropClick?: true;
  data: T;
}

export class ModalRef<T = any> {
  private backdropClickSubscription?: Subscription;
  private afterCloseSubject = new Subject<AfterClose<T>>();
  readonly afterClose = this.afterCloseSubject.asObservable();

  constructor(public overlay: OverlayRef, public data: T, closeOnBackdropClick= true) {
    this.backdropClickSubscription = overlay.backdropClick().subscribe(() => {
      if (closeOnBackdropClick) {
        this.close();
      }
    });
  }

  close(): void {
    this.overlay.dispose();
    this.backdropClickSubscription?.unsubscribe();
  }
}
