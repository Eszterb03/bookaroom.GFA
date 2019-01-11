import { Component, OnInit } from '@angular/core';
import { rooms } from '../mock-room';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  rooms = rooms;
  time = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  cellColor = '';
  user = '';

  ngOnInit() {
  }

  book(event){
    this.user = this.auth.userName;
    event.target.style = 'background: #3cb878';
    event.target.innerText = this.user;
  }

}
