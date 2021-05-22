import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardModalComponent} from '../../../shared/components/card-modal/card-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  foto:string

  @Input()
  id:any



  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  details(){

    this.dialog.open(CardModalComponent,{
      data:{
        id:this.id
      }
    });


  }


}
