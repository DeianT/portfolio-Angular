import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: any;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getData('experiencia').subscribe(data => {
      this.experiencia = data;
    });
  }
}