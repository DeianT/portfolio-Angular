import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any;
  direction:string = 'proyectos';
  aEditar:any

  constructor(private datos:DatosService, public autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.datos.getData(this.direction).subscribe(data => {
      this.proyectos = data;
    })
  }

  delete(id:number){
    this.datos.deleteData(this.direction, id).subscribe();
    window.location.reload()
  }

  edit(proyecto:any): void{
    this.aEditar = proyecto;
  }
}