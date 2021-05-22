import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {TapasServiceService} from '../../../services/tapas/tapas-service.service';
import {TapaModel} from '../../../models/tapaModel';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardModalComponent implements OnInit {





  tapaDetail: TapaModel;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: TapasServiceService,public dialog:MatDialog) {
    this.service.cargarTapa(this.data.id).subscribe(value => {

      this.tapaDetail = value;


    });
  }

  ngOnInit(): void {



  }
  borrar(precio: any) {


    this.service.borrarProducto(precio).subscribe((value) => {


      alert('producto eliminado');
      this.dialog.closeAll();


    }, error => {

      alert('Error el producto esta en uso');
    });


  }

}
