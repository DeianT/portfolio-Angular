import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getData('educacion').subscribe(data => {
      this.educacion = data;
    });
  }
}
