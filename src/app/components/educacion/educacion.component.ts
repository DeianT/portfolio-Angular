import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;

  constructor(private datos:DatosService, public autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.datos.getData('educacion').subscribe(data => {
      this.educacion = data;
    });
  }

  delete(id: number){
    this.datos.deleteData('educacion', id).subscribe();
    window.location.reload()
  }

  edit(ed: any){
    console.log(ed.nombre, ed.descripcion);
    // EditEducacionComponent.editar(ed);
  }
}
