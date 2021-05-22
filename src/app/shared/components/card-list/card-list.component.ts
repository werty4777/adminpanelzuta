import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {



   lista:Number[]=[1,2,3,4,5,6,7];

  constructor() { }

  ngOnInit(): void {
  }

}
