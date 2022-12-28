import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  nombre: string = "";
  inicio: number | undefined;
  fin: string = "";
  descripcion:string = "";

  showAddForm:boolean = false;

  constructor(private datos: DatosService, private ruta:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.fin === ""){
      // this.fin = "Actualidad";
    }
    const {nombre, inicio, fin, descripcion} = this;
    const educacion = {nombre, inicio, fin, descripcion};
    
    this.datos.addData('educacion', educacion).subscribe();
    this.ruta.navigate(['/']);
    this.ruta.navigate(['/educacion']);
  }
}
