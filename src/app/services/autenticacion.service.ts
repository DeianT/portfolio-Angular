import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "https://reqres.in/api/login";//url de la api. ¿Qué api? No tengo idea
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación está corriendo");

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('current') || '{}'));
  }

  IniciarSesion(credenciales: any):Observable<any>{
    // console.log("iniciarsesion");
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
