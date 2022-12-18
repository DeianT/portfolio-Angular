import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url: string = 'localhost:8080/api';//url de la api donde tengo los datos (la que estoy haciendo con spring y jpa)

  constructor(private http:HttpClient) { }

  getData():Observable<any>{//pasar como parámetro string /persona /educacion etc desde cada componente
    return this.http.get(this.url);//acá pongo la url
  }
}
