import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  nombre:string = "";
  descripcion:string = "";
  link:string = "";
  url_img:string = "";

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const {nombre, descripcion, link, url_img} = this;
    const proyecto = {nombre, descripcion, link, url_img};
    this.datos.addData('proyectos', proyecto).subscribe();
    window.location.reload()
  }
}
