import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  empresa:string = "";
  puesto: string = "";
  descripcion:string = "";
  inicio: number | undefined;
  fin: number|undefined;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const {empresa, puesto, descripcion, inicio, fin} = this;
    const experiencia = {empresa, puesto, descripcion, inicio, fin};
    this.datos.addData('experiencia', experiencia).subscribe();
    window.location.reload()
  }
}
