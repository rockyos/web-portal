import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  createDate: string;
  location: string;
  problemsType: string;
  description: string;
  isOpen: boolean;
  userId: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { createDate: '19-02-2012', location: 'ул.Халаменюка 6, кв. 1', problemsType: 'ЖКХ', description: 'Течет крыша', isOpen: true, userId: 'Вася Пупкин' },
  { createDate: '01-01-2021', location: 'ул.Победы 16, кв. 11', problemsType: 'Состояние дорог', description: 'Нет крышки люка', isOpen: true, userId: 'Люся Иванькова' },
  { createDate: '11-03-2018', location: 'ул.Красина 88, кв. 34', problemsType: 'Благоустройство', description: 'Лужа на полдвора', isOpen: true, userId: 'Тетя Мотя' },
];



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['createDate', 'location', 'problemsType', 'description','isOpen', 'userId'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
