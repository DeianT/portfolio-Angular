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
    this.datos.getData('personas').subscribe(data => {
      this.miPortfolio = data[0];
    });
    this.datos.getData('habilidades').subscribe(data => {
      this.habilidades = data;
    });
  }
}