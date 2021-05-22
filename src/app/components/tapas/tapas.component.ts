import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TapasModalComponent} from './tapas-modal/tapas-modal.component';
import {TapasServiceService} from '../../services/tapas/tapas-service.service';
import {TapaModel} from '../../models/tapaModel';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-productos',
  templateUrl: './tapas.component.html',
  styleUrls: ['./tapas.component.css']
})
export class TapasComponent implements OnInit {
  data: TapaModel[];
  dataSource: MatTableDataSource<TapaModel>;

  columnas: string[] = ['id', 'nombre', 'foto', 'categoria','color', 'stock', 'borrar'];



  constructor(public dialog: MatDialog, private service: TapasServiceService) {
    this.service.cargarTapas().subscribe(value => {
      this.data = value;
      this.dataSource=new MatTableDataSource(this.data);
    });
  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  agregarProducto() {


    this.dialog.open(TapasModalComponent, {
      data: {
        nombre: 'adrian'
      },
      id: 'agregarproducto'
    });

    this.dialog.afterAllClosed.subscribe(value => {

      this.service.cargarTapas().subscribe(value => {
        this.data = value;
      });
    });
  }

  borrar(precio: any) {


    this.service.borrarProducto(precio).subscribe((value) => {

      console.log(value);
      alert('producto eliminado');
      this.service.cargarTapas().subscribe(value2 => {
        this.data = value2;
      });

    }, error => {

      alert('Error el producto esta en uso');
    });
  }
}
