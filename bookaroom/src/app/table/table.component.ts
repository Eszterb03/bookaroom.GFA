import { Component, OnInit } from '@angular/core';
import { rooms } from '../mock-room';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  rooms = rooms;
  time = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  color = '';


  ngOnInit() {
  }

  clickMe() {
     this.color = '#3cb878';
  }
}
