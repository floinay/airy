import { ModalExampleService } from './modal-example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalExampleService) { }

  ngOnInit(): void {
  }

  openModalByService() {
    this.modalService.open();
  }

}
