import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
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
  url: string = 'https://portfoliobackend-4s6x.onrender.com/';//url de la api donde tengo los datos

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

  editData(direction: string, id: number, params:HttpParams):Observable<any>{
    console.log(`${this.url}${direction}/editar/${id}?${params.toString()}`)
    return this.http.put(`${this.url}${direction}/editar/${id}?${params.toString()}`, null);
  }
}
