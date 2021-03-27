import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-location',
  templateUrl: './modal-location.component.html',
  styleUrls: ['./modal-location.component.scss']
})
export class ModalLocationComponent implements OnInit {
  @ViewChild('classic') public templateref: TemplateRef<any>;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open() {
      this.modalService.open(this.templateref, { size: 'lg', centered: true, windowClass: 'modal-xl' }).result.then();
  }

  ngOnInit(): void {
  }

  onLoadFunc(myIframe){
    const data = myIframe.contentWindow.location.href;
    console.log(data);
  }
}
