import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  @Input() expAEditar: any;

  id: number = 0
  empresa: string = "";
  puesto: string = "";
  descripcion: string = "";
  inicio: string = "";
  fin: string = "";

  constructor(private datos: DatosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.asignarDatos();
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(this.expAEditar == null)
      return;

      const params = new HttpParams()
      .set("empresa", this.empresa)
      .set("puesto", this.puesto)
      .set("descripcion", this.descripcion)
      .set("inicio", this.inicio)
      .set("fin", this.fin)
      .set("persona_id", 2)

      this.datos.editData('experiencia', this.expAEditar.id, params).subscribe();
      window.location.reload()

      this.expAEditar = null
  }

  asignarDatos(): void{
    this.id = this.expAEditar.id;
    this.empresa = this.expAEditar.empresa;
    this.puesto = this.expAEditar.puesto;
    this.descripcion = this.expAEditar.descripcion;
    this.inicio = this.expAEditar.inicio;
    this.fin = this.expAEditar.fin;
  }
}
