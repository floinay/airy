import { Observable, firstValueFrom } from 'rxjs';
import { ModalExampleComponent } from './components/modal-example.component/modal-example.component';
import { ModalService } from './../../../../projects/modal/src/lib/services/modal.service';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ModalExampleService {
  constructor(private modalService: ModalService) {}

  open(): void {
    setTimeout(() => {
      this.modalService.open({ component: ModalExampleComponent, closeOnBackdropClick: false});
    }, 1);
  }

  openObservable(): Observable<unknown> {
    const rez = this.modalService.open({ component: ModalExampleComponent, closeOnBackdropClick: false});
    return rez.afterClose;
  }

  openPromise(data?: unknown): Promise<unknown> {
    const rez = this.modalService.open({ component: ModalExampleComponent, closeOnBackdropClick: false}, data);
    return firstValueFrom(rez.afterClose);
  }
}
