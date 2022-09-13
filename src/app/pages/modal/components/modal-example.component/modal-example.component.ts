import { Component, OnInit } from '@angular/core';
import { ModalRef } from './../../../../../../projects/modal/src/lib/modal-ref';

@Component({
  selector: 'app-modal-example.component',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {

  constructor(public ref: ModalRef) { }

  ngOnInit(): void {
    console.info('ref:', this.ref);
  }

}
