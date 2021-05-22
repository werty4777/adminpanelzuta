import { Component, OnInit } from '@angular/core';
import {TapasServiceService} from '../../../services/tapas/tapas-service.service';
import {TapasModalComponent} from '../tapas-modal/tapas-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {



   lista:any;

  constructor(private service:TapasServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {

    this.service.cargarTapas().subscribe(value => {
      this.lista=value;
    })
    this.dialog.afterAllClosed.subscribe(value => {

      this.service.cargarTapas().subscribe(value => {
        this.lista=value;
      })
    })
  }
  agregarProducto() {


    this.dialog.open(TapasModalComponent, {
      data: {
        nombre: 'manuel'
      },
      id: 'agregarproducto'
    });

    this.dialog.afterAllClosed.subscribe(value => {

      this.service.cargarTapas().subscribe(value => {
        this.lista = value;
      });
    });
  }

}
