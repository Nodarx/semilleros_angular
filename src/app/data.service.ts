import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrafoService } from 'src/app/grafo.service';

import { persona } from './persona';
import { profe } from './profe';
import { proyecto } from './proyecto';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient, private grafo: GrafoService) { 

  }

  getDocente(){
    return this.http.get<profe[]>('http://localhost:8080/profesores');
  }

  getIntegrantes(){
    if(this.grafo.getIntegrante() == 1){
      return this.http.get<persona[]>('http://localhost:8080/estudiantes/pregrado');
    }else {
      return this.http.get<persona[]>('http://localhost:8080/estudiantes/posgrado');
    }
  }

  getProyectos(){
    if(this.grafo.getProyecto() == 1){
        return this.http.get<proyecto[]>('http://localhost:8080/proyectos/activo');
    }else{ 
      return this.http.get<proyecto[]>('http://localhost:8080/proyectos/terminado');
    }
  }

}
