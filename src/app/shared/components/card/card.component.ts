import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardModalComponent} from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  details(){

    this.dialog.open(CardModalComponent,{

    });

  }

}
