import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-edit-presentacion',
  templateUrl: './edit-presentacion.component.html',
  styleUrls: ['./edit-presentacion.component.css']
})
export class EditPresentacionComponent implements OnInit {
  persona:any;

  nombre = "";
  // fecha_nac:Date = new Date();
  acerca_de:string = "";
  correo:string = "";
  instagram:string = "";
  linkedin:string = "";
  github:string = "";
  url_foto:string = "";
  url_logo:string = "";
  url_banner:string = "";

  constructor(private datos:DatosService) { 
    this.datos.getData('personas').subscribe(data => {
      this.persona = data[0];
    });
  }

  ngOnInit(): void {
  }

  onSubmit(id: number){
    const {nombre, acerca_de, correo, instagram, linkedin, github, url_foto, url_logo, url_banner} = this;

    const params = new HttpParams()
    .set("nombre", nombre)
    .set("acerca_de", acerca_de)
    .set("correo", correo)
    .set("instagram", instagram)
    .set("linkedin", linkedin)
    .set("github", github)
    .set("url_foto", url_foto)
    .set("url_logo", url_logo)
    .set("url_banner", url_banner);
    
    this.datos.editData('personas', id, params).subscribe();
    window.location.reload()
  }
}
