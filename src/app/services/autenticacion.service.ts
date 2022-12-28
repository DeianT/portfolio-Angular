import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "http://localhost:8080/auth";//url de la api
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación está corriendo");

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('current') || '{}'));
  }

  IniciarSesion(credenciales: any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('current', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  logOut(){
    sessionStorage.removeItem('current');
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }

  public get logIn():boolean{
    return sessionStorage.getItem('current') !== null;
  }
}
