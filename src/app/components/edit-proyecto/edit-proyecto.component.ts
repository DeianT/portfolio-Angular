import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  @Input() proyectoAEditar: any;

  id: number = 0;
  nombre: string = "";
  descripcion: string = "";
  link: string = "";
  url_img: string = "";

  constructor(private datos: DatosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.asignarDatos();
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.proyectoAEditar == null)
      return;

    const params = new HttpParams()
    .set("nombre", this.nombre)
    .set("descripcion", this.descripcion)
    .set("link", this.link)
    .set("url_img", this.url_img)
    .set("persona_id", 2)

    this.datos.editData('proyectos', this.id, params).subscribe();
    window.location.reload()

    this.proyectoAEditar = null;
  }

  asignarDatos(): void{
    this.id = this.proyectoAEditar.id;
    this.nombre = this.proyectoAEditar.nombre;
    this.descripcion = this.proyectoAEditar.descripcion;
    this.link = this.proyectoAEditar.link;
    this.url_img = this.proyectoAEditar.url_img;
  }
}
