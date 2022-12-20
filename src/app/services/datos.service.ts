import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url: string = 'http://localhost:8080/';//url de la api donde tengo los datos

  constructor(private http:HttpClient) { }

  getData(mapping: String):Observable<any>{//pasar como parámetro /persona /educacion etc desde cada componente
    return this.http.get(this.url + mapping + '/traer');
  }
}
