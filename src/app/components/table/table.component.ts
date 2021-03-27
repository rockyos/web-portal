import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

export interface PeriodicElement {
  createDate: string;
  location: string;
  problemsType: string;
  description: string;
  isOpen: boolean;
  userId: string;
  link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { createDate: '19-02-2012', location: 'ул.Халаменюка 6, кв. 1', problemsType: 'ЖКХ', description: 'Течет крыша', isOpen: true, userId: 'Вася Пупкин', link: 'https://proekt-sam.ru/wp-content/uploads/techet-kriysha-v-dome.jpg'  },
  { createDate: '01-01-2021', location: 'ул.Победы 16, кв. 11', problemsType: 'Состояние дорог', description: 'Нет крышки люка', isOpen: false, userId: 'Люся Иванькова', link: 'data:image/jpeg;base64,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' },
  { createDate: '11-03-2018', location: 'ул.Красина 88, кв. 34', problemsType: 'Благоустройство', description: 'Лужа на полдвора', isOpen: true, userId: 'Тетя Мотя', link: 'https://gazetahimik.ru/wp-content/uploads/2017/09/dvor.jpg' },
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['createDate', 'location', 'problemsType', 'description','isOpen', 'userId', 'link'];
  dataSource = ELEMENT_DATA;
  @Input() newItem: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.newItem && this.newItem !== undefined){
        this.dataSource.push(this.newItem);
      }
    
  }

  ngOnInit(): void {
  }


}
