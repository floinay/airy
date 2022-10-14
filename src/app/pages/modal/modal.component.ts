import { ModalExampleService } from './modal-example.service';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalExampleService) { }

  ngOnInit(): void {
  }

  openModalByService(): void {
    this.modalService.open();
  }

  openModalsByServiceSync(): void {
    // firstValueFrom(this.modalService.openObservable())
    // .then(() => {
    //   console.info('first modal closed');
    //   return firstValueFrom(this.modalService.openObservable());
    // }).then(() => {
    //   console.info('second modal closed');
    // })
    this.modalService.openPromise({message: 'test'})
    .then((result) => {
      console.info('first modal closed, result:', result);
      return this.modalService.openPromise();
    })
    .then((result) => {
      console.info('second modal closed, result:', result);
    })
  }

  async openModalsByServiceAwait(): Promise<void> {
    const result = await this.modalService.openPromise({type: 'async-await'});
    console.info('first modal closed, result:', result);
    const result2 = await this.modalService.openPromise({type: 'async-await', attempt: '2'});
    console.info('first modal closed, result:', result);
  }

}
