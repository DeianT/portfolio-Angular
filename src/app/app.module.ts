import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

const appRoutes:Routes = [
  {path:'', component: PresentacionComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'proyectos', component: ProyectosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentacionComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
