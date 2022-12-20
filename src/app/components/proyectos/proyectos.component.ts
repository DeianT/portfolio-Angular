import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getData('proyectos').subscribe(data => {
      this.proyectos = data;
    })
  }
}