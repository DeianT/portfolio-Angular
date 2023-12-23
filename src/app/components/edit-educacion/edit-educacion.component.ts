import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit, OnChanges {
  @Input() educacionAEditar: any;

  id: number = 0;
  nombre: string = "";
  inicio: string = "";
  fin: string = "";
  descripcion:string = "";

  showAddForm:boolean = false;

  constructor(private datos:DatosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.asignarDatos();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.educacionAEditar == null)
      return;
    
    const params = new HttpParams()
    .set("nombre", this.educacionAEditar.nombre)
    .set("descripcion", this.educacionAEditar.descripcion)
    .set("inicio", this.educacionAEditar.inicio)
    .set("fin", this.educacionAEditar.fin)
    .set("persona_id", 2)

    this.datos.editData('educacion', this.educacionAEditar.id, params).subscribe();
    console.log(this.educacionAEditar);
    // window.location.reload()
    this.educacionAEditar = null;
  }

  asignarDatos(): void{
    this.id = this.educacionAEditar.id;
    this.nombre = this.educacionAEditar.nombre;
    this.inicio = this.educacionAEditar.inicio;
    this.fin = this.educacionAEditar.fin;
    this.descripcion = this.educacionAEditar.descripcion;
  }
}
