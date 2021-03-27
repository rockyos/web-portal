import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalLocationComponent } from '../modal-location/modal-location.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items = [
    {value: 1, text: 'Транспорт'},
    {value: 2, text: 'Состояние дорог'},
    {value: 3, text: 'Благоустройство'},
    {value: 4, text: 'ЖКХ'},
    {value: 4, text: 'Другие проблемы'},
  ];
  isViewtask = true;
  isViewLocation = false;

  @ViewChild(ModalLocationComponent) private modal: ModalLocationComponent;
  constructor() { }

  ngOnInit(): void {
  }

  getLocation(){
    this.modal.open();
    this.isViewLocation = true;
  }

  create(){
this.items.push();
  }

  viewTask(){
    if(!this.isViewtask){ this.isViewtask = !this.isViewtask;}
  }

  createTask(){
    if(this.isViewtask){ this.isViewtask = !this.isViewtask;}
  }

}
