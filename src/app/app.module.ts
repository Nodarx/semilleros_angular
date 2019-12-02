import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { Gf1Component } from './g-principal/gf1.component';
import { BrComponent } from './br/br.component';
import { GIntegrantesComponent } from './g-integrantes/g-integrantes.component';
import { GObjetivosComponent } from './g-objetivos/g-objetivos.component';
import { GProyectosComponent } from './g-proyectos/g-proyectos.component';
import { GPublicacionesComponent } from './g-publicaciones/g-publicaciones.component';
import { TemasComponent } from './temas/temas.component';

import { DataService } from './data.service';
import { GrafoService } from './grafo.service';
import { GrafosComponent } from './grafos/grafos.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { PonenciasComponent } from './ponencias/ponencias.component';
import { LibrosComponent } from './libros/libros.component';
import { EventosComponent } from './eventos/eventos.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { DocentesComponent } from './docentes/docentes.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectComponent } from './proyect/proyect.component';

const routes: Route[] = [
  {path:'',component: GrafosComponent},
  {path:'libros',component: LibrosComponent},
  {path:'eventos',component: EventosComponent},
  {path:'docentes',component: DocentesComponent},
  {path:'proyectos',component: ProyectosComponent},
  {path:'objetivos',component: ObjetivosComponent},
  {path:'ponencias',component: PonenciasComponent},
  {path:'articulos',component: ArticulosComponent},
  {path:'formulario',component: FormularioComponent},
  {path:'integrantes',component: IntegrantesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    Gf1Component,
    BrComponent,
    GIntegrantesComponent,
    GObjetivosComponent,
    GProyectosComponent,
    GPublicacionesComponent,
    TemasComponent,
    GrafosComponent,
    ObjetivosComponent,
    IntegrantesComponent,
    FormularioComponent,
    ArticulosComponent,
    PonenciasComponent,
    LibrosComponent,
    EventosComponent,
    IntegranteComponent,
    DocentesComponent,
    ProfesorComponent,
    ProyectosComponent,
    ProyectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, GrafoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
