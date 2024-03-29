import {OverlayRef} from '@angular/cdk/overlay';
import {Subject, Subscription} from 'rxjs';

interface AfterClose<T> {
  onBackdropClick?: boolean;
  isClosed?: boolean;
  isChecked?: boolean;
  data?: T;
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

  close(isChecked = false): void {
    this.overlay.dispose();
    this.backdropClickSubscription?.unsubscribe();
    this.afterCloseSubject.next({isClosed: true, isChecked: isChecked, data: this.data});
  }
}
