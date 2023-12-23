import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { EducacionComponent } from '../educacion/educacion.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: any;

  id: number = 0;
  nombre: string = "";
  inicio: string = "";
  fin: string = "";
  descripcion:string = "";

  showAddForm:boolean = false;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.id == 0)
      return;
    
    const params = new HttpParams()
    .set("nombre", this.nombre)
    .set("descripcion", this.descripcion)
    .set("inicio", this.inicio)
    .set("fin", this.fin)
    .set("persona_id", 2)

    // this.datos.editData('educacion', this.id, params).subscribe();
    //no puede acceder porque es estatico
    // console.log(educacion);
    // window.location.reload()
  }

  static editar(ed: any){
    console.log('editar')

    // this.id = ed.id;
    // this.nombre = ed.nombre;
    // this.inicio = ed.inicio;
    // this.fin = ed.fin;
    // this.descripcion = ed.descripcion;
    
    //no puede acceder porque es estatico
  }
}
