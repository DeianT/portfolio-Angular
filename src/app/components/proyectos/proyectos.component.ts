import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miPortfolio:any;
  proyectos:any;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getData().subscribe(data => {
      this.miPortfolio = data;
      this.proyectos = data.proyectos;
    })
  }
}