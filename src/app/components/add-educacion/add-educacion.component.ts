import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  nombre: string = "";
  inicio: string = "";
  fin: string = "";
  descripcion:string = "";

  showAddForm:boolean = false;

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const {nombre, inicio, fin, descripcion} = this;
    const educacion = {nombre, inicio, fin, descripcion};
    
    this.datos.addData('educacion', educacion).subscribe();
    window.location.reload()
  }
}