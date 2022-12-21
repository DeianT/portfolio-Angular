import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url: string = 'http://localhost:8080/';//url de la api donde tengo los datos

  constructor(private http:HttpClient) { }

  getData(mapping: String):Observable<any>{//pasar como parámetro /persona /educacion etc desde cada componente
    return this.http.get(this.url + mapping + '/traer');
  }

  addData(direction: String, body: any):Observable<any>{
    return this.http.post(this.url + direction + '/crear', body, httpOptions);
  }

  deleteData(direction: string, id:number):Observable<any>{
    return this.http.delete(this.url + direction + '/borrar/' + id);
  }
}
