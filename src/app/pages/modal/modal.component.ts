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
    this.modalService.openPromise()
    .then(() => {
      console.info('first modal closed');
      return this.modalService.openPromise();
    })
    .then(() => {
      console.info('second modal closed');
    })
    // or you can use async await
  }

}
