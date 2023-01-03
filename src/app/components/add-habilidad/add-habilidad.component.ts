import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent implements OnInit {
  nombre: string = "";

  constructor(private datos: DatosService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const {nombre} = this;
    const habilidad = {nombre};
    this.datos.addData('habilidades', habilidad).subscribe();
    window.location.reload()
  }
}
