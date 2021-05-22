import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {



  private lista:Number[]=[1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
