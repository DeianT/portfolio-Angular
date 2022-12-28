import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: any;
  direction: string = 'experiencia';

  constructor(private datos:DatosService, public autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.datos.getData(this.direction).subscribe(data => {
      this.experiencia = data;
    });
  }

  delete(id:number){
    this.datos.deleteData(this.direction, id).subscribe();
  }
}