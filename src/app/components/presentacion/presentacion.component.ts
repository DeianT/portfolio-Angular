import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  miPortfolio: any;
  habilidades: any;

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getData().subscribe(data => {
      this.miPortfolio = data;
      this.habilidades = this.miPortfolio.habilidades;
    });
  }
}