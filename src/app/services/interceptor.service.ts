import { Injectable } from '@angular/core';
import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacion: AutenticacionService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacion.UsuarioAutenticado;
    
    if(currentUser && currentUser.jwttoken){
      req = req.clone({
        setHeaders:{
          'Authorization': `Bearer ${currentUser.jwttoken}`
        }
      })
    }
    console.log("interceptor " + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
