import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('classic') public templateref: TemplateRef<any>;
  @Output() emitData = new EventEmitter();
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open() {
    this.modalService.open(this.templateref, { centered: true }).result.then();
  }

  click() {
    this.emitData.emit();
    this.modalService.dismissAll();
  }
  ngOnInit(): void {
  }


}
