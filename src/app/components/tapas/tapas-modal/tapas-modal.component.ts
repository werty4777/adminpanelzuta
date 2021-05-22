import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TapasServiceService} from '../../../services/tapas/tapas-service.service';
import {ThemePalette} from '@angular/material/core';
import {MaxSizeValidator} from '@angular-material-components/file-input';
import {CrearTapa} from '../../../models/crearTapa';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './tapas-modal.component.html',
  styleUrls: ['./tapas-modal.component.css']
})
export class TapasModalComponent implements OnInit {

  tipoSeleccionado;
  tipo = [];


  grupo: FormGroup = new FormGroup({
    nombre: new FormControl(),
    tipo: new FormControl(),
    cantidad: new FormControl(),
    color: new FormControl()


  });

  data64: any;

  color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;


  fileControl: FormControl;
  public files;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private service: TapasServiceService) {
    this.fileControl = new FormControl(this.files, [
      Validators.required,
      MaxSizeValidator(16 * 1024)
    ]);
  }

  ngOnInit(): void {

    this.service.cargarTiposTapas().subscribe(value => {
      this.tipo = value;
    });

    this.fileControl.valueChanges.subscribe((files: any) => {
      if (!Array.isArray(files)) {
        this.files = [files];
      } else {
        this.files = files;
      }
    });

  }

  save(): void {


    const reader = new FileReader();

    reader.readAsDataURL(this.files[0]);

    let tapa: CrearTapa = {
      cantidad: this.grupo.controls.cantidad.value,
      color: this.grupo.controls.color.value,
      idTipo: this.grupo.controls.tipo.value,
      nombre: this.grupo.controls.nombre.value
    };

    reader.onload = () => {
      tapa.foto = reader.result.toString();
      this.service.agregarProducto(tapa).subscribe(value => {

        this.dialog.getDialogById('agregarproducto').close();
      });
    };







  }

}
