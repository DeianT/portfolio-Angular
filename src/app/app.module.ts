import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosService } from './services/datos.service';
import { InterceptorService } from './services/interceptor.service';
import { AddEducacionComponent } from './components/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { AddHabilidadComponent } from './components/add-habilidad/add-habilidad.component';
import { EditPresentacionComponent } from './components/edit-presentacion/edit-presentacion.component';
import { EditEducacionComponent } from './components/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/edit-experiencia/edit-experiencia.component';

const appRoutes:Routes = [
  {path:'portfolio', component: PresentacionComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentacionComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciaComponent,
    IniciarSesionComponent,
    AddEducacionComponent,
    AddExperienciaComponent,
    AddProyectoComponent,
    AddHabilidadComponent,
    EditPresentacionComponent,
    EditEducacionComponent,
    EditExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatosService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
